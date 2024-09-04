import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import { Genre } from "../hooks/useGenre.ts";
import { Platform } from "../hooks/usePlatforms.ts";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
    setSelectedPlatform: (platform: Platform | null) => void;
}

const Main = ({
    selectedGenre,
    selectedPlatform,
    setSelectedPlatform
}: Props) => {
    return (
        <div className="w-full">
            <PlatformSelector onSelectedPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform}/>
            <GameGrid
                selectedGenre={selectedGenre}
                selectedPlatform={selectedPlatform}
            />
        </div>
    );
};

export default Main;
