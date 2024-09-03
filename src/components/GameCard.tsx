import { Game } from "../hooks/useGames.ts";
import logo from "../assets/naingwin.jpg";
interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow">
            <img
                className="w-full object-cover"
                src={game.background_image}
                alt={game.name}
            />
            <div className="bg-gray-700 p-3 text-2xl h-full dark:text-white text-white">
                <p>{game.name}</p>
            </div>
        </div>
    );
};

export default GameCard;
