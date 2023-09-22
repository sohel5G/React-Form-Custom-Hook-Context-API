import Special from "../Special/Special";

const Myself = ({ asset }) => {
    return (
        <div className="border-2 p-10">
            <h1>My Self</h1>
            <div className="border-2 p-3">
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default Myself;


