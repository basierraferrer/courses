
interface KeyboardProps {
  handleKeyPress: (key: string) => void;
}

const Keyboard = ({ handleKeyPress }: KeyboardProps) => {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-10 gap-1">
        {'QWERTYUIOP'.split('').map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className="aspect-square bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1">
        {'ASDFGHJKL'.split('').map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className="aspect-square bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1">
        <button
          onClick={() => handleKeyPress('ENTER')}
          className="col-span-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors py-2"
        >
          ENTER
        </button>
        {'ZXCVBNM'.split('').map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className="aspect-square bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {key}
          </button>
        ))}
        <button
          onClick={() => handleKeyPress('BACKSPACE')}
          className="col-span-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors py-2"
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default Keyboard;