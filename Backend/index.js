import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import express from 'express';

const app = express();

app .get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello!")
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    })