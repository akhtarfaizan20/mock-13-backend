const express = require("express");
const { registerUser, loginUser } = require("../Controller/User.controller");

const userRouter = express.Router();

userRouter.post("/signup", registerUser);

userRouter.post("/login", loginUser);

module.exports = {
  userRouter,
};
