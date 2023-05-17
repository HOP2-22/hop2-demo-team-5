const express = require("express");
const {
  getUsers,
  createUser,
  login,
  getUserByToken,
} = require("../controllers/UserController");

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .post("/create", createUser)
  .post("/login", login)
  .get("/getUserByToken", getUserByToken);

module.exports = userRouter;
