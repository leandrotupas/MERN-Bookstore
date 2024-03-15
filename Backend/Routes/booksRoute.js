import express from 'express';
import { Book } from '../Models/bookModels.js';

const router = express.Router();

//Route to save new books         
router.post('/', async (request, response) => {
    try {
        if ( //If there are no title, author, year, return log error 400
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
         ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book); //Sends book to client
    } catch (error) {
        console.log(error)
        response.status(500).send({ message: error.message });
    }
});

// Route to get all books from the DB
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route to get one book from the DB
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findById(id);
        
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for updating book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);
        
        //If no result send 404
        if (!result){
            return response.status(404).json({ message: 'Book not Found' });
        } 
        
        return response.status(200).send({ message: "Book Updated Sucessfully"});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result){
            return response.status(404).json({ message: 'Book not Found' });
        }

        return response.status(200).send({ message: "Book Deleted Successfully" });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router;