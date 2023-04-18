import { Request, Response } from "express";
import { PostCreateService, TestService, findPostService } from "../services/post.service";

export const test = (req: Request, res: Response) => {
    TestService(req, res);
}

export const createPost = (req: Request, res: Response) => {
    PostCreateService(req,res);
}

export const findPost = (req: Request, res: Response) => {
    findPostService(req, res);
}