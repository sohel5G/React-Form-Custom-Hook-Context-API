import useInputState from "../hooks/useInputState";


const HookForm = () => {

    const emailState = useInputState('Sohel@gmail.com');

    // const [name, handleNameChange] = useInputState('Sohel');

    const handleSubmit = e => {
        console.log(emailState.value);

        // console.log('dddd', name);
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input className="border-2" value={name} onChange={handleNameChange} name="name" type="text" /> */}
                <br />
                <input className="border-2" {...emailState} name="email" type="email" />
                <br />
                <input className="border-2" name="number" type="number" />
                <br />
                <input className="border-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;