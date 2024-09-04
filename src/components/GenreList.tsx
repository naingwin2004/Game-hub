import useGenre from "../hooks/useGenre.ts";
import Spinner from "../components/Spinner";
import { Genre } from "../hooks/useGenre.ts";
interface Props {
    onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
    const { genres, error, isLoading } = useGenre();
    if (error) {
        return null;
    }
    if (isLoading) return <Spinner />;
    return (
        <>
            <div>
                {genres.map(genre => (
                    <div
                        key={genre.id}
                        className="flex py-2 items-center gap-3"
                    >
                        <img
                            src={genre.image_background}
                            alt={genre.name}
                            className="w-9 h-7 rounded object-cover"
                        />
                        <button
                            className="text-md font-bold hover:underline"
                            onClick={() => {
                                onSelectedGenre(genre);
                            }}
                        >
                            {genre.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GenreList;
