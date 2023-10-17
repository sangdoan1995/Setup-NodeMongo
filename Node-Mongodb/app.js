import express from "express";
import bodyParser from "body-parser";
import dbConnect from "./ConnectDB";
import User from "./UserModel"
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect();

const newSchema = new User({
    email: "sangdoan123456789@gmail.com",
    password: "Ducsang2512"
})
newSchema.save()
    .then(() => {
        console.log('insert schema success')
    })
    .catch((error) => {
        console.log(`insert fail cause ${error}`)
    })

app.get('/', async (req, res) => {
    const todo = await User.find();
    res.json(todo)
})
module.exports = app;