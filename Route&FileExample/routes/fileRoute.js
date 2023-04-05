import express from "express";
import { getFile, saveFile } from "../controllers/fileController.js";

const fileRouter = express.Router();

fileRouter.route("/")
    .get(getFile)
    .post(saveFile)

export default fileRouter;