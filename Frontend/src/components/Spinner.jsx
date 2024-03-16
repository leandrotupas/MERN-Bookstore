import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center w-16 h-16 m-8 rounded-full bg-sky-600">
            <div className="w-8 h-8 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
