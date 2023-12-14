import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div
            className='m-20 text-center space-y-10'
        >
            <div
                className='space-y-3'
            >
                <p
                    className='text-7xl'
                >
                    <span
                        className='uppercase'
                    >
                        Error
                    </span>
                    <span
                        className='text-red-500 font-extrabold'
                    >
                        404
                    </span>
                </p>
                <p
                    className='text-gray-500'
                >
                    Your requested page no found.
                </p>
            </div>
            <div>
                <Link
                    to='/'
                    className='px-6 py-2 bg-teal-500 text-white rounded'
                >
                    Back Home
                </Link>
            </div>

        </div>
    );
};

export default Error404;