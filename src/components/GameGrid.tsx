import useGames from "../hooks/useGames.ts";
import GameCardSkeleton from "../components/GameCardSkeleton";
import GameCard from "../components/GameCard";
import { Genre } from "../hooks/useGenre.ts";
import { Platform } from "../hooks/usePlaforms.ts";
interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { games, error, isLoading } = useGames(selectedGenre,selectedPlatform);
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ];
    return (
        <>
            {error && <p>{error}</p>}
            <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 sm:mx-5 mx-2 z-10">
                {isLoading &&
                    skeletons.map(skeleton => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GameGrid;
