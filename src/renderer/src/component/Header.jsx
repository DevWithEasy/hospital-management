import user_image from '../assets/demo-user.png'

const Header = () => {
    return (
        <div
            className='absolute left-0 top-0 w-full p-2 flex justify-between bg-slate-100/50 rounded-tl-md'
        >
            <input 
                placeholder='patient name'
                className='w-1/4 p-2 bg-slate-50/80 text-sm border focus:outline-none rounded-md'
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