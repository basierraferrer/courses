import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Wordle</h1>
          <p className="text-gray-300 mb-8">¡Adivina la palabra oculta!</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white text-center mb-4">Selecciona la dificultad</h2>

          <Link
            href="/game?difficulty=easy"
            className="block w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 text-center"
          >
            Fácil
          </Link>

          <Link
            href="/game?difficulty=medium"
            className="block w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-200 text-center"
          >
            Medio
          </Link>

          <Link
            href="/game?difficulty=hard"
            className="block w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200 text-center"
          >
            Difícil
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Cada palabra tiene 5 letras. ¡Tienes 6 intentos para adivinarla!
          </p>
        </div>
      </div>
    </main>
  );
}