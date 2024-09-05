import useGenres from "../hooks/useGenre.ts";
import Spinner from "../components/Spinner";
import { Genre } from "../hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null;
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <div>
            {data.map(genre => (
                <div
                    key={genre.id}
                    className={`flex py-2 items-center  gap-1
                    ${genre.id === selectedGenre?.id ? "font-bold" : ""}`}
                >
                    <img
                        src={genre.image_background}
                        alt={genre.name}
                        className="w-9 h-7 rounded object-cover"
                    />
                    <button
                        className="text-md hover:underline text-start"
                        onClick={() => onSelectedGenre(genre)}
                    >
                        {genre.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default GenreList;
