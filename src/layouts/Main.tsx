import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
    setGameQuery: (query: GameQuery) => void;
}

const Main = ({ gameQuery, setGameQuery }: Props) => {
    return (
        <div className="w-full mx-3 md:mx-5">
            <GameHeading gameQuery={gameQuery} />
            <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={platform =>
                    setGameQuery({ ...gameQuery, platform })
                }
            />
            <SortSelector
                onSelectSortOrder={sortOrder =>
                    setGameQuery({ ...gameQuery, sortOrder })
                }
            />
            <GameGrid gameQuery={gameQuery} />
        </div>
    );
};

export default Main;
