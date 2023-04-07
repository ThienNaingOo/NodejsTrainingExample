import express from "express";
import { createUser, deleteUser, finduser, test, updateUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.route('/')
    .get(test)

userRouter.route('/user')
    .post(createUser)
    .get(finduser)
    .put(updateUser)
    .delete(deleteUser)

export default userRouter