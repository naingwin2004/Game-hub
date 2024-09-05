import GenreList from "../components/GenreList";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
    setGameQuery: (query: GameQuery) => void;
}

const Aside = ({ gameQuery, setGameQuery }: Props) => {
    return (
        <div className="hidden lg:block pl-3">
            <h1 className="text-2xl font-black">Genres</h1>
            <GenreList
                selectedGenre={gameQuery.genre}
                onSelectedGenre={genre => setGameQuery({ ...gameQuery, genre })}
            />
        </div>
    );
};

export default Aside;
