import Navbar from "./layouts/Navbar.tsx";
import Aside from "./layouts/Aside.tsx";
import Main from "./layouts/Main.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenre.ts";
import { Platform } from "./hooks/usePlatforms.ts"; // Corrected import

const App = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );

    return (
        <div className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen">
            <Navbar />
            <div className="flex">
                <Aside
                    setSelectedGenre={setSelectedGenre}
                    selectedGenre={selectedGenre}
                />
                <Main
                    selectedGenre={selectedGenre}
                    selectedPlatform={selectedPlatform}
                    setSelectedPlatform={setSelectedPlatform}
                />
            </div>
        </div>
    );
};

export default App;
