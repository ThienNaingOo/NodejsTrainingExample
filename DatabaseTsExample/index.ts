import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("This is Database Example")
})

app.use('/api', userRouter)

// mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB || '').then(() => {
    console.log('database is connected.');

    app.listen(process.env.PORT, () => {
        console.log('server is listening in PORT ', process.env.PORT);
    })
})
