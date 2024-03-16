import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className="flex items-center">
            <Link
                to={destination}
                className="flex items-center bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
                <BsArrowLeft className="text-xl mr-2" />
                <span className="text-base font-medium">Back</span>
            </Link>
        </div>
    );
};

export default BackButton;
