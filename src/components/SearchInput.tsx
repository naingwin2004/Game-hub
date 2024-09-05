import { useRef } from "react";
import { GoSearch } from "react-icons/go";
interface Props {
    onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>();
    return (
        <form
            className="flex items-center w-full border-gray-300 border rounded-full dark:bg-gray-800 dark:border-gray-600 hover:ring-2 ring-gray-800 hover:border-none dark:ring-gray-300 outline-1 px-1"
            onSubmit={e => {
                e.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <GoSearch />
            <input
                type="text"
                placeholder="Search game..."
                className="w-full p-1 md:p-2  rounded-full dark:bg-gray-800 dark:text-white outline-none"
                ref={ref}
            />
        </form>
    );
};

export default SearchInput;
