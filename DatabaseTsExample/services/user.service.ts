import { Request, Response } from "express";
import User from "../models/user.model";

export const TestService = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Your action is Successed."
    })
}

export const createUserSerivce = (req: Request, res: Response) => {
    if (req.body.name && req.body.email) {
        try {
            const userData = {
                name: req.body.name,
                email: req.body.email
            }
            const data = new User(userData)
            data.save().then((user) => {
                res.status(201).json({
                    message: "Your action is Successed.",
                    data: user
                })
            })
        } catch (error) {
            console.log(error);
        }
    } else res.status(400).json({
        message: "Some Fields are missing.",
    })
}

export const findUserService = async (req: Request, res: Response) => {

    try {
        const result = await User.find()
        res.status(200).json({
            message: "success",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateUserService = async (req: Request, res: Response) => {
    if (req.body.id && req.body.name && req.body.email) {
        try {
            const filter = { _id: req.body.id }
            const update = {
                name: req.body.name,
                email: req.body.email
            }
            const user = await User.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true
            })
            res.status(200).json({ message: 'Your action is Successed.', data: user })
        } catch (error) {
            console.log(error);
        }
        res.status(200).json({
            message: "success"
        })
    } else res.status(400).json({
        message: "Some fields are missing.",
    })
}

export const deleteUserService = async (req: Request, res: Response) => {
    if (req.body.id) {
        try {
            const deletefilter = { _id: req.body.id }
            const user = await User.findByIdAndDelete(deletefilter)
            if (user == null) {
                res.status(404).json({ message: 'Data is not occured.'})
            } else res.status(200).json({ message: 'Your action is Successed.', data: user })
        } catch (error) {
            console.log(error);
        }
    } else res.status(400).json({
        message: "User ID is missing.",
    })
}