import Special from "../Special/Special";


const Cousin = ({ name, asset }) => {
    return (
        <div className="border-2 p-5">
            <h1>Cousin</h1>
            <p>{name}</p>
            <div className="border-2 p-3">
                {asset && <Special asset={asset}></Special>}
            </div>
        </div>
    );
};

export default Cousin;



