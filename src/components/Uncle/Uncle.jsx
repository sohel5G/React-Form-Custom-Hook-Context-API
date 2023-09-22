import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div className="border-2 p-5">
            <h1>Uncle</h1>
            <div className="flex border-2 gap-10 p-8">
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;



