import { Platform } from "../hooks/useGames";

//icon
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
/* ---------------------------------------------*/

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    };

    return (
        <div className="flex space-x-2 mb-1">
            {platforms.map(platform => {
                const IconComponent = iconMap[platform.slug] || FaWindows;
                return (
                    <IconComponent
                        key={platform.id}
                        className="w-3.5 h-3.5 text-white"
                    />
                );
            })}
        </div>
    );
};

export default PlatformIconList;
