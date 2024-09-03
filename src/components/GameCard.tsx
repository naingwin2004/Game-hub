import { Game } from "../hooks/useGames.ts";
import PlatformIconList from "./PlatformIconList";
import Score from "../components/Score";
interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden drop-shadow-lg">
            <img
                className="w-full object-cover"
                src={game.background_image}
                alt={game.name}
            />
            <div className="bg-gray-800 p-3 text-2xl h-full dark:text-white text-white font-bold">
                <div className="flex items-center justify-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map(p => p.platform)}
                    />
                    <Score score={game.metacritic} />
                </div>
                <p>{game.name}</p>
            </div>
        </div>
    );
};

export default GameCard;
