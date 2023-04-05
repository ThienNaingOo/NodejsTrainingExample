import { getFileService, saveFileService } from "../services/fileService.js"

export const getFile = (req,res) => {
    getFileService(req,res);
}

export const saveFile = (req,res) => {
    saveFileService(req,res);
}