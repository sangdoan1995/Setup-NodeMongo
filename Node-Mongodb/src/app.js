import express from "express";
import bodyParser from "body-parser";
import dbConnect from "./Database/ConnectDB";
import webRouter from './router/router';
import viewEngine from './engine/viewEngine';
import cors from "cors";
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
viewEngine(app)
dbConnect();
webRouter(app);


module.exports = app;