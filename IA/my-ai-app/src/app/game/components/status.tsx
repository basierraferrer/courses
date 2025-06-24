interface StatusProps {
  gameOver: boolean;
  gameWon: boolean;
  targetWord: string;
}

const Status = ({ gameOver, gameWon, targetWord }: StatusProps) => {
  return (
    <div>
      {gameOver && (
        <div className="text-center">
          <p className="text-xl font-bold text-white">
            {gameWon ? '¡Felicidades! ¡Ganaste!' : '¡Game Over!'}
          </p>
          <p className="text-gray-300 mt-2">La palabra era: {targetWord}</p>
        </div>
      )}
    </div>
  );
};

export default Status;