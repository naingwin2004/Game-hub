import React from "react";

interface Props {
    score: number;
}
const Score = ({ score }: Props) => {
    const color =
        score > 75
            ? "bg-green-500"
            : score > 60
            ? "bg-yellow-500"
            : "";
    return (
        <span className={`text-sm ${color} bg-opacity-30 px-2 py-0.5 rounded`}>
            {score}
        </span>
    );
};

export default Score;
