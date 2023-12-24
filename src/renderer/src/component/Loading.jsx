import '../assets/loading.css'

const Loading = () => {
    return (
        <div
        className='h-screen fixed top-0 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='text-center'
            >
                <div className="loader"></div>
                <p
                    className='text-white animate-pulse'
                >
                    Please wait
                </p>
            </div>
        </div>
    );
};

export default Loading;