import GenreList from "../components/GenreList";
import { Genre } from "../hooks/useGenre.ts";

interface Props {
    setSelectedGenre: (genre: Genre | null) => void;
}

const Aside = ({ setSelectedGenre }: Props) => {
    return (
        <div className="hidden lg:block pl-3">
            <GenreList onSelectedGenre={genre => setSelectedGenre(genre)} />
        </div>
    );
};

export default Aside;
