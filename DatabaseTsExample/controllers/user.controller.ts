import { Request, Response } from "express";
import { TestService, createUserSerivce, deleteUserService, findUserService, updateUserService } from "../services/user.service";

export const test = (req: Request, res: Response) => {
    TestService(req, res);
}

export const createUser = (req: Request, res: Response) => {    
    createUserSerivce(req, res);
}

export const finduser = (req: Request, res: Response) => {
    findUserService(req, res);
}

export const updateUser = (req: Request, res: Response) => {
    updateUserService(req, res);
}

export const deleteUser = (req: Request, res: Response) => {
    deleteUserService(req, res);
}