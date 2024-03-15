import mongoose from "mongoose";

const bookSchema = mongoose.Schema( //Recipe for Books to enter the DB
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },

    {
        timestamps: true,
    }
    
);

export const Book = mongoose.model('Cat', bookSchema); //export =  can be used outside of this file