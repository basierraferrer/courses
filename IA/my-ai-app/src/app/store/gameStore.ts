import { create } from 'zustand';
import { Difficulty, GameState } from '@typos/game';
import { DIFFICULTY } from '@utils/constants';
import { getWords } from '@actions/generateText';
import { checkDifficultyRules, validateWord } from '@utils/gameUtils';

interface GameStore {
  gameState: GameState;
  targetWord: string;
  error: string;
  isLoading: boolean;
  difficulty: Difficulty;
  wordCache: {
    [key in Difficulty]: string[];
  };
  statistics: {
    gamesPlayed: number;
    gamesWon: number;
    currentStreak: number;
    maxStreak: number;
    winsByDifficulty: Record<Difficulty, number>;
  };

  // Acciones

  initializeGame: (difficulty: Difficulty) => Promise<void>;
  handleKeyPress: (key: string) => void;
  resetGame: () => void;
  fetchNewWords: (difficulty: Difficulty) => Promise<void>;
}

const initialState: GameState = {
  currentRow: 0,
  currentCol: 0,
  guesses: Array(6).fill(Array(5).fill('')),
  letterStates: Array(6).fill(Array(5).fill({ letter: '', state: 'empty' })),
  gameOver: false,
  gameWon: false,
};

const initialStatistics = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  winsByDifficulty: {
    [DIFFICULTY.EASY]: 0,
    [DIFFICULTY.MEDIUM]: 0,
    [DIFFICULTY.HARD]: 0,
  },
};

const initialWordCache = {
  [DIFFICULTY.EASY]: [],
  [DIFFICULTY.MEDIUM]: [],
  [DIFFICULTY.HARD]: [],
};

export const useGameStore = create<GameStore>((set, get) => ({
  // Estado inicial
  gameState: initialState,
  targetWord: '',
  error: '',
  isLoading: false,
  difficulty: DIFFICULTY.EASY,
  wordCache: initialWordCache,
  statistics: initialStatistics,

  fetchNewWords: async (difficulty: Difficulty) => {
    try {
      const { text } = await getWords(difficulty);
      const words = text.split(',').map(word => word.trim());
      set(state => ({
        wordCache: {
          ...state.wordCache,
          [difficulty]: words,
        },
      }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: 'Error al cargar las palabras. Por favor, intenta de nuevo.' });
    }
  },

  initializeGame: async (difficulty: Difficulty) => {
    //const { wordCache } = get();

    set({difficulty});
    set({ isLoading: true, error: '' });

    try {
      //if (wordCache[difficulty].length === 0) {
        //await get().fetchNewWords(difficulty);
      //}
      const { text } = await getWords(difficulty);
      const availableWords = text.split(',').map(word => word.trim());

      //const availableWords = wordCache[difficulty];
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const selectedWord = availableWords[randomIndex];

      set(state => ({
        ...state,
        //wordCache: {
        //  ...state.wordCache,
        //  [difficulty]: state.wordCache[difficulty].filter((_, index) => index !== randomIndex),
        //},
        targetWord: selectedWord,
      }));

    } catch {
      set({ error: 'Error al cargar la palabra. Por favor, intenta de nuevo.' });
    } finally {
      set({ isLoading: false });
    }
  },

  handleKeyPress: (key: string) => {
    const { gameState, targetWord, difficulty } = get();

    if (gameState.gameOver) return;

    if (key === 'ENTER') {
      if (gameState.currentCol !== 5) return;

      const currentWord = gameState.guesses[gameState.currentRow].join('');

      if (!checkDifficultyRules(currentWord, difficulty)) {
        set({ error: 'La palabra no cumple con las reglas de la dificultad seleccionada' });
        return;
      }

      const newLetterStates = [...gameState.letterStates];
      newLetterStates[gameState.currentRow] = validateWord(currentWord, targetWord);

      const isCorrect = currentWord === targetWord;
      const isLastRow = gameState.currentRow === 5;

      const newGameState = {
        ...gameState,
        letterStates: newLetterStates,
        currentRow: isCorrect || isLastRow ? gameState.currentRow : gameState.currentRow + 1,
        currentCol: 0,
        gameOver: isCorrect || isLastRow,
        gameWon: isCorrect,
      };

      set({ gameState: newGameState, error: '' });

      // Actualizar estadísticas
      if (isCorrect || isLastRow) {
        const { statistics } = get();
        const newStats = { ...statistics };
        newStats.gamesPlayed += 1;

        if (isCorrect) {
          newStats.gamesWon += 1;
          newStats.currentStreak += 1;
          newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
          newStats.winsByDifficulty[difficulty] += 1;
        } else {
          newStats.currentStreak = 0;
        }

        set({ statistics: newStats });
      }
      return;
    }

    if (key === 'BACKSPACE') {
      if (gameState.currentCol > 0) {
        const newGuesses = [...gameState.guesses];
        newGuesses[gameState.currentRow][gameState.currentCol - 1] = '';
        set({
          gameState: {
            ...gameState,
            currentCol: gameState.currentCol - 1,
            guesses: newGuesses,
          },
        });
      }
      return;
    }

    if (gameState.currentCol < 5) {
      const newGuesses = [...gameState.guesses];
      newGuesses[gameState.currentRow][gameState.currentCol] = key;
      set({
        gameState: {
          ...gameState,
          currentCol: gameState.currentCol + 1,
          guesses: newGuesses,
        },
      });
    }
  },

  resetGame: () => {
    set({
      gameState: initialState,
      targetWord: '',
      error: '',
      isLoading: false,
    });
  },
})); 