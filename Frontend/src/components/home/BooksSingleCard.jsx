import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';


const BooksSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-lg hover:shadow-xl relative">
            <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-300 rounded-lg text-sm">{book.publishYear}</h2>
            <h4 className="text-gray-500">{book._id}</h4>

            <div className="flex items-center gap-2 mt-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="text-lg">{book.title}</h2>
            </div>

            <div className="flex items-center gap-2 mt-1">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="text-lg">{book.author}</h2>
            </div>

            <div className="flex justify-between items-center mt-4">
                <BiShow 
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`} className="text-green-800 hover:text-black">
                    <BsInfoCircle className="text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`} className="text-yellow-600 hover:text-black">
                    <AiOutlineEdit className="text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`} className="text-red-600 hover:text-black">
                    <MdOutlineDelete className="text-2xl" />
                </Link>
                {
                    showModal && (
                        <BookModal book={book} onClose={() => setShowModal(false)} />
                    )
                }
            </div>
        </div>
    );
};

export default BooksSingleCard;
