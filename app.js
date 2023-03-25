const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");

const app = express();
const port = process.env.port || 3030;

app.use(express.json());
app.use("/users", router);

app.use("/", (req, res, next) => {
    res.status(200).json({ message: "Server running"});
});

mongoose.connect("mongodb+srv://admin:admin@user-management.3gja1mj.mongodb.net/?retryWrites=true&w=majority").then(() => {
    app.listen(port, () => {
        console.log(`Server started at port: ${port}`);
    });
}).catch((error) => {
    console.log("Database not connected");
});