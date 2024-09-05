import useGames from "../hooks/useGames";
import GameCardSkeleton from "../components/GameCardSkeleton";
import GameCard from "../components/GameCard";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = Array(10).fill(0);

    return (
        <>
            {error && <p>{error}</p>}
           
            <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3  z-10">
                {isLoading &&
                    skeletons.map((_, index) => (
                        <GameCardSkeleton key={index} />
                    ))}
                {data.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GameGrid;
