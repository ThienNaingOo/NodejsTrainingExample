import { Request, Response } from "express";
import Post from "../models/post.model";

export const TestService = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Your action is Successed."
    })
}

export const findPostService = async (req: Request, res: Response) => {
    try {
        const result = await Post.find()
        .populate({ path: 'created_user_id', model: 'user', select: 'name email -_id' })
        .sort({ createdAt: -1 })
        res.status(200).json({
            message: "success",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const PostCreateService = (req: Request, res: Response) => {
    try {
        const postData = {
            title: req.body.title,
            description: req.body.description,
            created_user_id: req.body.user_id
        }
        const data = new Post(postData)
        data.save().then((post) => {
            res.status(200).json({
                message: "Your action is Successed.",
                data: post
            })
        })
    } catch (error) {
        console.log(error);
    }
}