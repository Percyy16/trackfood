import React, { useState } from "react";

const InputFood = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5100/foods", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <h2>Food List</h2>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    );
};

export default InputFood;