import { Difficulty, LetterState } from "@typos/game";
import { DIFFICULTY } from "./constants";


export const validateWord = (word: string, targetWord: string): LetterState[] => {
  const result: LetterState[] = [];
  const targetLetters = targetWord.split('');
  const wordLetters = word.split('');

  // Primero marcamos las letras correctas
  for (let i = 0; i < 5; i++) {
    if (wordLetters[i] === targetLetters[i]) {
      result.push({ letter: wordLetters[i], state: 'correct' });
      targetLetters[i] = ''; // Marcamos como usada
    } else {
      result.push({ letter: wordLetters[i], state: 'empty' });
    }
  }

  // Luego marcamos las letras presentes pero en posición incorrecta
  for (let i = 0; i < 5; i++) {
    if (result[i].state === 'empty') {
      const index = targetLetters.indexOf(wordLetters[i]);
      if (index !== -1) {
        result[i].state = 'present';
        targetLetters[index] = ''; // Marcamos como usada
      } else {
        result[i].state = 'absent';
      }
    }
  }

  return result;
};

export const checkDifficultyRules = (word: string, difficulty: Difficulty): boolean => {
 
  const consonants = 'bcdfghjklmnñpqrstvwxyz';

  switch (difficulty) {
    case DIFFICULTY.EASY:
      // No se pueden repetir vocales ni consonantes
      const letterCount = new Map<string, number>();
      for (const letter of word.toLowerCase()) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
        if (letterCount.get(letter)! > 1) return false;
      }
      return true;

    case DIFFICULTY.MEDIUM:
      // Se pueden repetir vocales pero no consonantes
      const consonantCount = new Map<string, number>();
      for (const letter of word.toLowerCase()) {
        if (consonants.includes(letter)) {
          consonantCount.set(letter, (consonantCount.get(letter) || 0) + 1);
          if (consonantCount.get(letter)! > 1) return false;
        }
      }
      return true;

    case DIFFICULTY.HARD:
      // Se permiten todas las repeticiones
      return true;

    default:
      return false;
  }
}; 