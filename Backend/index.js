import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import express from 'express';
import { Book } from "./Models/bookModels.js";
import booksRoute from "./Routes/booksRoute.js";
import cors from 'cors';

const app = express();

//Middleman to parse request body
app.use(express.json());

//Middleman to handle CORS Policy

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

//Uses route from routes folder
app.use('/books', booksRoute);

//Check to see if requests are pushed through
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello!")
});

//Connecting to MogoDB
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

