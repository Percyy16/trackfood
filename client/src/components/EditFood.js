import React, { useState } from 'react';

const EditFood = ({ food }) => {

    console.log(food);

    const [description, setDescription] = useState(food.description);

    //edit description

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5100/foods/${food.food_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.nessage);
        }
    }

    return (
        <>

            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#id${food.food_id}`}
            >
                Edit
            </button>

            <div className="modal fade" id={`id${food.food_id}`}
                tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true"
                onClick={() => setDescription(food.description)}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Food</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setDescription(food.description)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => setDescription(food.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default EditFood;