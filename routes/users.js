import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, replaceUser, updateUser } from "../controller/users.js";



const usersRouter = express.Router();



usersRouter
  .get("/", getAllUsers)
  .get("/:id", getUser)
  .post("/", createUser)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

export default usersRouter