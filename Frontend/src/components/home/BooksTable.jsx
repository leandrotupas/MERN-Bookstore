import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import BookModal from './BookModal';

const BooksTable = ({ books }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <table className="w-full border-separate border border-gray-300">
            <thead>
                <tr>
                    <th className="px-4 py-2 border border-gray-300">No</th>
                    <th className="px-4 py-2 border border-gray-300">Title</th>
                    <th className="px-4 py-2 border border-gray-300 hidden md:table-cell">Author</th>
                    <th className="px-4 py-2 border border-gray-300 hidden md:table-cell">Publish Year</th>
                    <th className="px-4 py-2 border border-gray-300">Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="border-b border-gray-300">
                        <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                        <td className="px-4 py-2 border border-gray-300">{book.title}</td>
                        <td className="px-4 py-2 border border-gray-300 hidden md:table-cell">{book.author}</td>
                        <td className="px-4 py-2 border border-gray-300 hidden md:table-cell">{book.publishYear}</td>
                        <td className="px-4 py-2 border border-gray-300 text-center">
                            <div className="flex justify-center items-center gap-x-4">
                                <BiShow 
                                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                                    onClick={() => setShowModal(true)}
                                />
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-green-800 text-2xl" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-yellow-600 text-2xl" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-red-600 text-2xl" />
                                </Link>
                                {
                                    showModal && (
                                        <BookModal book={book} onClose={() => setShowModal(false)} />
                                    )
                                }
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BooksTable;
