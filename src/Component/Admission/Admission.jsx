import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div className='bg-orange-500 py-16'>
            <h2 className="text-4xl text-center font-bold text-gray-800">Why you are so late get you seat <Link to='/admission' className='bg-blue-500 text-white px-2 rounded-md'>Book</Link></h2>
        </div>
    );
};

export default Admission;