'use server';

import { generateText } from 'ai';
import { deepseek } from '@ai-sdk/deepseek';
import { DIFFICULTY } from '@utils/constants';

export async function getWords(difficult: string) {
  let prompt = '';

  if(difficult === DIFFICULTY.EASY){
    prompt = `Genera una lista de 5 palabras, de 5 caracteres que no repitan ni vocal ni consonante en cada palabra. Cada palabra debe: Tener 5 letras.
              No repetir ninguna vocal ni ninguna consonante dentro de sí misma. Ser una palabra real del español. 
              Necesito que la respuesta solo sean las palabras separadas por coma (,) sin texto adicional`;
  }

  if(difficult === DIFFICULTY.MEDIUM){
    prompt = `Genera una lista de 5 palabras, de 5 caracteres que pueden repetir vocales pero no consonantes. Cada palabra debe: Tener 5 letras.
              Se pueden repetir vocales pero no consonantes dentro de sí misma. Ser una palabra real del español. 
              Necesito que la respuesta solo sean las palabras separadas por coma (,) sin texto adicional`;
  }

  if(difficult === DIFFICULTY.HARD){
    prompt = `Genera una lista de 5 palabras, de 5 caracteres que pueden repetir cualquier letra. Cada palabra debe: Tener 5 letras.
              Se pueden repetir vocales y consonantes dentro de sí misma. Ser una palabra real del español. 
              Necesito que la respuesta solo sean las palabras separadas por coma (,) sin texto adicional`;
  }

  const { text, finishReason, usage } = await generateText({
    model: deepseek('deepseek-reasoner'),
    prompt,
  });

  return { text, finishReason, usage };
}