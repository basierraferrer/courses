import { GameState, LetterState } from "@typos/game";

interface GridProps {
  gameState: GameState;
  getLetterClass: (state: LetterState['state']) => string;
}

const Grid = ({ gameState, getLetterClass }: GridProps) => {
  return (
    <div className="grid grid-rows-6 gap-2">
      {gameState.guesses.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`aspect-square border-2 rounded-lg flex items-center justify-center text-2xl font-bold text-white transition-colors ${getLetterClass(gameState.letterStates[rowIndex][colIndex].state)}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;