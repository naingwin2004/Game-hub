import usePlatforms from "../hooks/usePlaforms.ts"; // Corrected import
import { Platform } from "../hooks/usePlatforms.ts"; // Corrected import

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform ,selectedPlatform}: Props) => {
    const { platforms, error } = usePlatforms(); // Corrected hook name

    if (error) return null;

    return (
        <details className="dropdown relative mx-3 my-4  px-3 dark:bg-gray-800 bg-gray-800 rounded inline  font-bold text-white">
            <summary className="m-1">{selectedPlatform?.name || 'Platform'}</summary>
            <ul className="rounded z-[99] w-52 shadow absolute bg-gray-800 my-4 left-0 grid ">
                {platforms.map(platform => (
                    <li
                        className="hover:bg-gray-600 p-2"
                        key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </li>
                ))}
            </ul>
        </details>
    );
};

export default PlatformSelector;
