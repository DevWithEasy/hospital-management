import user_image from '../assets/demo-user.png'

const Header = () => {
    return (
        <div
            className='absolute left-0 top-0 w-full px-4 py-2 flex justify-between'
        >
            <input 
                placeholder='patient name'
                className='w-1/4 px-2 py-1 bg-teal-50/50 border border-teal-100 focus:outline-none rounded-md'
            />
            <div
            className='flex items-center space-x-2'
            >
                <img
                    src={user_image}
                    className='h-8 w-8 bg-blue-500 rounded-full'
                />
                <span>
                    Admin
                </span>
            </div>
        </div>
    );
};

export default Header;