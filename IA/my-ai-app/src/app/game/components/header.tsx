import { Difficulty } from "@typos/game";

interface HeaderProps {
  difficulty: Difficulty;
  error: string;
}

const Header = ({ difficulty, error }: HeaderProps) => {
  return (<div className="text-center">
    <h1 className="text-3xl font-bold text-white mb-2">Wordle</h1>
    <p className="text-gray-300">Dificultad: {difficulty}</p>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>);
};

export default Header;