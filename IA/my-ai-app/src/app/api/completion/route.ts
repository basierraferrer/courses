import { streamText } from 'ai';
import { deepseek } from '@ai-sdk/deepseek';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  /**
   * Genera una lista de 5 palabras, de 5 caracteres que no repitan ni vocal ni consonante en cada palabra.
Cada palabra debe: 
  Tener 5 letras.
  No repetir ninguna vocal ni ninguna consonante dentro de sí misma.
  Ser una palabra real del español.
Necesito que la respuesta solo sean las palabras separadas por coma (,) sin texto adicional
   */

  const result = streamText({
    model: deepseek('deepseek-reasoner'),
    prompt,
  });

  return result.toDataStreamResponse();
}