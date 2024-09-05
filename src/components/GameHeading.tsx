import { GameQuery } from "../App";
interface Props {
    gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: gameQuery) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
    return <h1 className="font-bold text-4xl">{heading}</h1>;
};

export default GameHeading;
