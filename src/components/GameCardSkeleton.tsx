

const GameCardSkeleton = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden drop-shadow-lg animate-pulse">
            <div className="w-96 h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="bg-gray-800 p-3 text-2xl h-24 dark:bg-gray-700">
                <div className="flex items-center justify-between mb-2">
                    <div className="w-16 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                    <div className="w-10 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="w-3/4 h-8 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
        </div>
    );
};

export default GameCardSkeleton;
