import { useState } from "react";


const StatefulForm = () => {

    const [name, setName] = useState('default value');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        if(name.length < 5){
            setError('please enter more then 5 letter')
        }else{
            setError('')
            console.log(name);
        }
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2" onChange={handleNameChange} name="name" type="text" value={name} />
                {error && <p>{error}</p>}
                <br />
                <input className="border-2" name="email" type="email" />
                
                <br />
                <input className="border-2" name="number" type="number" />
                <br />
                <input className="border-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;