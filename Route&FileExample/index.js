import express from "express";
import fileRouter from "./routes/fileRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/file', fileRouter);

app.get('/', (req, res) => {
    res.send("This is Assignment 02")
});

app.listen(3000, () => {
    console.log("server is running on PORT 3000");
})