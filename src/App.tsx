import Navbar from "./layouts/Navbar";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

const App = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({
        genre: null,
        platform: null,
        sortOrder: "default",
        searchText: ""
    });

    return (
        <div className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen">
            <Navbar
                onSearch={(searchText: string) =>
                    setGameQuery({ ...gameQuery, searchText })
                }
            />
            <div className="flex">
                <Aside gameQuery={gameQuery} setGameQuery={setGameQuery} />
                <Main gameQuery={gameQuery} setGameQuery={setGameQuery} />
            </div>
        </div>
    );
};

export default App;
