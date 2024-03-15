import mongoose, { mongo } from "mongoose";

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
            requiredL: true,
        },
    },

    {
        timestamps: true,
    }
    
);

export const Cat = mongoose.model('Cat', { name: String});