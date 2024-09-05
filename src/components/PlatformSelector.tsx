import usePlatforms from "../hooks/usePlatforms.ts";
import { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedPlatform: Platform | null;
    onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
    const { data: platforms, error } = usePlatforms();

    if (error) return null;

    return (
        <details className="dropdown relative my-4 px-3 dark:bg-gray-800 bg-gray-800 rounded inline font-bold text-white">
            <summary className="m-1">
                {selectedPlatform?.name || "Platform"}
            </summary>
            <ul className="rounded z-[99] w-full shadow absolute bg-gray-800 my-4 left-0 grid">
                {platforms.map(platform => (
                    <li
                        className="hover:bg-gray-600 p-2 bg-gray-800"
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
