export type Difficulty = 'easy' | 'medium' | 'hard';

export type LetterState = {
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'empty';
};

export interface GameState {
  currentRow: number;
  currentCol: number;
  guesses: string[][];
  letterStates: LetterState[][];
  gameOver: boolean;
  gameWon: boolean;
} 