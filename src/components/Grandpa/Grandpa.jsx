import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className="border-2 mt-11">
            <h1 className="text-6xl text-center">Grandpa</h1>
            <h1 className="text-3xl text-center mt-6">Net money : {money}</h1>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Gold">
                    <div className="flex gap-10 justify-center py-11 ">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </div>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;



