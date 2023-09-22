import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className="border-2 p-5">
            <h1>Aunty</h1>
            <div className="flex border-2 gap-10 p-8">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaya'}></Cousin>
            </div>
            <div>
                <p>Money : {money}</p>
                <button className="bg-sky-400 p-3 mt-8" onClick={() => setMoney(money + 1000) }>Add more 1000 TK</button>
            </div>
        </div>
    );
};

export default Aunty;



