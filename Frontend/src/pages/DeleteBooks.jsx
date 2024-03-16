import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Deleted Succesfully', { variant: 'success'})
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error'});
                console.error(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book </h1>
            {loading && <Spinner />}
            <div className="flex flex-col items-center border border-sky-400 rounded-xl max-w-xl mx-auto p-8">
                <h3 className="text-2xl mb-8">Are you sure you want to delete this book?</h3>

                <button
                    className="p-4 bg-red-600 text-white w-full rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={handleDeleteBook}
                >
                    {loading ? 'Deleting...' : 'Yes, Delete It'}
                </button>
            </div>
        </div>
    );
};

export default DeleteBooks;
