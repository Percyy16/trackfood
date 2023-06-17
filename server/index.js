const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//create

app.post("/foods", async (req, res) => {
    try {
        const { description } = req.body;
        const newFood = await pool.query(
            "INSERT INTO food (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newFood.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all

app.get("/foods", async (req, res) => {
    try {
        const allFoods = await pool.query("SELECT * FROM food");
        res.json(allFoods.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get specific

app.get("/foods/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const food = await pool.query("SELECT * FROM food WHERE food_id = $1", [id]);
        res.json(food.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//updatee

app.put("/foods/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateFood = await pool.query(
            "UPDATE food SET description = $1 WHERE food_id = $2",
            [description, id]);

        res.json("Updated");
    } catch (err) {
        console.error(err.message);
    }
});

//delete

app.delete("/foods/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFoods = await pool.query(
            "DELETE FROM food WHERE food_id = $1",
            [id]);
            res.json("Deleted");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5100, () => {
    console.log("serves port 5100");
});
