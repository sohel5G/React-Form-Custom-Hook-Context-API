import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({ asset }) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h1>Special</h1>
            <h2>Has : {asset}</h2>
            <h3>ALso has : {gift}</h3>
        </div>
    );
};

export default Special;



