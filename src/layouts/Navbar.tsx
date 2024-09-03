//assets
import logo from "../assets/logo.webp";
//components
import DarkModeToggle from "../components/DarkModeToggle";
const Navbar = () => {
    return (
        <div className="w-screen flex items-center justify-between md:p-4 p-2">
            <img src={logo} alt="logo" className="w-14 h-14 object-cover" />
            <DarkModeToggle />
        </div>
    );
};

export default Navbar;
