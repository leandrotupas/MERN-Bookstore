import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center space-x-4">
                <button
                    className={`px-4 py-2 rounded-lg ${showType === 'table' ? 'bg-sky-300 hover:bg-sky-600' : 'bg-gray-300 hover:bg-gray-600'}`}
                    onClick={() => setShowType('table')}
                >
                    Table View
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${showType === 'card' ? 'bg-sky-300 hover:bg-sky-600' : 'bg-gray-300 hover:bg-gray-600'}`}
                    onClick={() => setShowType('card')}
                >
                    Card View
                </button>
            </div>
            <div className="flex justify-between items-center my-8">
                <h1 className="text-3xl">Books List</h1>
                <Link to="books/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>

            {loading ? <Spinner /> : showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
        </div>
    );
};

export default Home;
