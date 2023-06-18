import React, { useEffect, useState } from 'react';
import EditFood from './EditFood';

const ListFood = () => {

    const [foods, setFoods] = useState([]);

    //delete

    const deleteFood = async (id) => {
        try {
            const deleteFood = await fetch(`http://localhost:5100/foods/${id}`, {
                method: "DELETE"
            });
            setFoods(foods.filter(food => food.food_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getFoods = async () => {
        try {

            const response = await fetch("http://localhost:5100/foods");
            const jsonData = await response.json();

            setFoods(jsonData);

        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getFoods();
    }, []);

    return (
        <div>
            <h2>List Food</h2>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(food => (
                        <tr key={food.food_id}>
                            <td>{food.description}</td>
                            <td>
                                <EditFood food={food} />
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => deleteFood(food.food_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListFood;