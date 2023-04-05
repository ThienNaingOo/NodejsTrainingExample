import fs from "fs";

export const getFileService = (req, res) => {
    fs.readFile('./public/test.txt','utf8', (err, data) => {
        if (!err) {
            let fsData = data.split("#")
            res.render('index', { username: fsData[0], password: fsData[1] })
        } else res.render('index', { username: "", password: "" })
    })
}

export const saveFileService = (req,res) => {
    const { username, password } = req.body;
    const fileData = username + '#' + password;
    fs.writeFile('./public/test.txt', fileData, (err) => {
        if(!err) {
            res.render('index', { username: username, password: password })
            console.log("success");
        } else console.log(err);
    })
}