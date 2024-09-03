import useGames from "../hooks/useGames.ts";

import GameCard from "../components/GameCard";
const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            {error && <p>{error}</p>}
            <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 sm:mx-5 mx-2">
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GameGrid;
