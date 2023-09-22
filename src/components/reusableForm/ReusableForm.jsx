

const ReusableForm = ({ formTitle, handleSubmit, submitBtnTxt = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.number.value
        };
        handleSubmit(data);
    }

    return (
        <div>
            <h1 className="text-2xl"> {formTitle} </h1>
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input className="border-2" name="name" type="text" />
                <br />
                <input className="border-2" name="email" type="email" />
                <br />
                <input className="border-2" name="number" type="number" />
                <br />
                <input className="border-2" type="submit" value={submitBtnTxt} />
            </form>
        </div>
    );
};

export default ReusableForm;