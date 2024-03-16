import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created Succesfully', { variant: 'success'})
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error has occurred. Please check the console.');
                enqueueSnackbar('Error', { variant: 'error'})
                console.error(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading && <Spinner />}
            <div className="flex flex-col border border-sky-400 rounded-xl max-w-md mx-auto p-4">
                <div className="my-4">
                    <label htmlFor="title" className="text-xl mr-4 text-gray-500">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-500 px-4 py-2 min-w-full"
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="author" className="text-xl mr-4 text-gray-500">
                        Author
                    </label>
                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border border-gray-500 px-4 py-2 min-w-full"
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
                        Publish Year
                    </label>
                    <input
                        id="publishYear"
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="border border-gray-500 px-4 py-2 min-w-full"
                    />
                </div>
                <button
                    className="p-2 bg-sky-300 rounded-lg mt-8 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    onClick={handleSaveBook}
                >
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </div>
        </div>
    );
};

export default CreateBooks;
