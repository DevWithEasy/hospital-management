/* eslint-disable react/prop-types */
import '../assets/loading.css'

const Loading = ({msg}) => {
    return (
        <div
        className='h-screen fixed -top-2 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='p-4 bg-white text-center rounded-md shadow-lg'
            >
                <div className="loading"></div>
                <p
                    className='text-gray-500 text-sm animate-pulse'
                >
                    {msg ? msg : 'We are working!'}
                </p>
            </div>
        </div>
    );
};

export default Loading;