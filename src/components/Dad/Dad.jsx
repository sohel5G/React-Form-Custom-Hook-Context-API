import Brother from "../Brother/Brother";
import Syster from "../Syster/Syster";
import Myself from "./Myself";


const Dad = ({ asset }) => {
    return (
        <div className="border-2 p-10">
            <h1>Dad</h1>
           <div className="flex border-2 gap-10 p-8">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Syster></Syster>
           </div>
        </div>
    );
};

export default Dad;