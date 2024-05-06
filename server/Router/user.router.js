const express = require("express");
const { registerUser, loginUser } = require("../Controllers/user.contoller");
const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
