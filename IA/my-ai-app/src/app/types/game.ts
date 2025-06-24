import { DIFFICULTY } from "@utils/constants";

export interface LetterState {
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'empty';
}

export type Difficulty = (typeof DIFFICULTY)[keyof typeof DIFFICULTY];

export interface GameState {
  currentRow: number;
  currentCol: number;
  guesses: string[][];
  letterStates: LetterState[][];
  gameOver: boolean;
  gameWon: boolean;
}