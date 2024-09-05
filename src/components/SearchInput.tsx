import { GoSearch } from "react-icons/go";
const SearchInput = () => {
    return (
        <div className="flex items-center w-full border-gray-300 border rounded-md dark:bg-gray-800 dark:border-gray-600 hover:ring-2 ring-gray-800 hover:border-none dark:ring-gray-300 outline-1 px-1">
            <GoSearch />
            <input
                type="text"
                placeholder="Search game..."
                className="w-full p-1 md:p-2  rounded-md dark:bg-gray-800 dark:text-white outline-none "
            />
        </div>
    );
};

export default SearchInput;
