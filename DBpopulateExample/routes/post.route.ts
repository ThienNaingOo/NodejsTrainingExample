import express from "express";
import { createPost, findPost, test } from "../controllers/post.controller";

const postRouter = express.Router();

postRouter.route('/')
    .get(findPost)
    .post(createPost)

export default postRouter