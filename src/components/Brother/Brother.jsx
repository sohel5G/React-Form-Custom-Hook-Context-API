import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className="border-2 p-10">
            <h1>Brother</h1>
            <h1>Total : {money}</h1>
        </div>
    );
};

export default Brother;


