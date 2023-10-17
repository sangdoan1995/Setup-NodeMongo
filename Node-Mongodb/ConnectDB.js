import mongoose from "mongoose";
require('dotenv').config();

async function dbConnect() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("success connected mongodb")
    }).catch((error) => {
        console.log("disconnect database!")
        console.log(error)
    })
}


module.exports = dbConnect