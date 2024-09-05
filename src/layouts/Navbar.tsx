//assets
import logo from "../assets/logo.webp";
//components
import DarkModeToggle from "../components/DarkModeToggle";
import SearchInput from "../components/SearchInput";
interface Props {
    onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
    return (
        <div className="w-screen flex items-center justify-between md:p-4 p-2 gap-2">
            <img src={logo} alt="logo" className="w-14 h-14 object-cover" />
            <SearchInput onSearch={onSearch} />
            <DarkModeToggle />
        </div>
    );
};

export default Navbar;
