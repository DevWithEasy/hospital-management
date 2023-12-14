import React from 'react';

const Header = () => {
    return (
        <div
            className='w-full p-2 flex justify-between fixed top-0'
        >
            <input 
                placeholder='patient name'
                className='px-2 py-1 bg-teal-50 border border-teal-100 rounded-md'
            />
            <div>
                <img 
                    src=''
                    className='h-6 w-6 bg-blue-500 rounded-full'
                />
            </div>
        </div>
    );
};

export default Header;