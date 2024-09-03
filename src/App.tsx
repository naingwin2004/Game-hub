//Layouts
import Navbar from "./layouts/Navbar.tsx";
import Aside from "./layouts/Aside.tsx";
import Main from "./layouts/Main.tsx";
const App = () => {
    return (
        <div className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen">
            <Navbar />
            <div className="flex">
                <Aside />
                <Main />
            </div>
        </div>
    );
};
export default App;
