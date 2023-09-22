import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(numRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2" ref={nameRef} name="name" type="text" />
                <br />
                <input className="border-2" ref={emailRef} name="email" type="email" />
                <br />
                <input className="border-2" ref={numRef} name="number" type="number" />
                <br />
                <input className="border-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;