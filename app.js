const express = require("express");
const app = express();

const taskRouter = require("./routes/taskRoutes");
const userRouter = require("./routes/userRoutes");

// Middlewares
app.use(express.json());


app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
