import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div
            className='flex justify-center'
        >
            <Link to='/'>Back Home</Link>
        </div>
    );
};

export default Error404;