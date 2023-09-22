

const Simpleform = () => {

    const handleSubmit = e => {
        e.preventDefault();

        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.number.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2" name="name" type="text" />
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

export default Simpleform;