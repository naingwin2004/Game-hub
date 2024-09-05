import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
        }
    }, []);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex gap-3 flex-none">
            <button
                onClick={toggleDarkMode}
                className="flex items-center justify-between w-11 h-6 bg-gray-200 dark:bg-gray-800 rounded-full"
            >
                <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full transform transition-transform duration-300 flex-nowrap ${
                        isDarkMode
                            ? "translate-x-6 bg-gray-700"
                            : "translate-x-0 bg-yellow-400"
                    }`}
                >
                    {isDarkMode ? (
                        <FaMoon
                            className="text-white
                    "
                        />
                    ) : (
                        <FaSun className="text-white" />
                    )}
                </div>
            </button>
            <p className="font-bold flex-none">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </p>
        </div>
    );
};

export default DarkModeToggle;
