import React from "react";
interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ onSelectSortOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" }
    ];
    return (
        <details className="dropdown relative mx-3 my-4 px-3 dark:bg-gray-800 bg-gray-800 rounded inline font-bold text-white">
            <summary className="m-1">Order by</summary>
            <ul className="rounded z-[99] w-full shadow absolute bg-gray-800 my-4 left-0 grid">
                {sortOrders.map(sort => (
                    <li
                        className="hover:bg-gray-600 p-2"
                        key={sort.value}
                        value={sort.value}
                        onClick={() => onSelectSortOrder(sort.value)}
                    >
                        {sort.label}
                    </li>
                ))}
            </ul>
        </details>
    );
};

export default SortSelector;
