const { urlencoded, json } = require("express");
const cors = require("cors");
const express = require("express");

const userRouter = require("./routes/user.js");
const { connectMongoDb } = require("./connection.js");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const port = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/tutorial-app-1");

// Routes
app.use("/users", userRouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));
