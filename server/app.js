const express = require("express");
const cors = require("cors");
const userRouter = require("./Router/user.router");
const ticketRouter = require("./Router/ticket.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/users", userRouter);
app.use("/tickets", ticketRouter);

module.exports = app;
