import { useState } from 'react';
import user_image from '../assets/demo-user.png'
import { SearchPatient } from './Index';
import axios from 'axios'
import useUserStore from '../store/userStore';

const Header = () => {
    const [view, setView] = useState(false)
    const [patients, setpatients] = useState([])
    const { user,removeUser } = useUserStore()

    const handleSearch = async (search) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            if (res.data.length > 0) {
                setView(true)
                setpatients(res.data)
            }
        } catch (error) {
            console.log()
        }
    }
    return (
        <div
            className='absolute left-0 top-0 w-full p-2 pr-4 flex justify-between bg-slate-200/50 rounded-tl-md'
        >
            <input
                placeholder='patient name'
                className='w-1/4 sm:w-2/4 p-2 bg-slate-50/90 text-sm border focus:outline-none rounded-md'
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div
                className='relative pl-2 pr-4 flex items-center space-x-2 bg-white border rounded cursor-pointer group'
            >
                <img
                    src={!user?.image ? user_image : user.image}
                    className='h-8 w-8 rounded-full'
                />
                <div>
                    <p
                        className='text-xs font-medium'
                    >
                        {user?.name}
                    </p>
                    <p
                        className='text-xs text-gray-400'
                    >
                        {user?.email}
                    </p>
                </div>
                <div
                    className='absolute -left-2 -bottom-12 w-full p-2 pt-10 hidden group-hover:block'
                >
                    <button
                        onClick={()=>removeUser()}
                        className='w-full py-1 bg-red-500 text-white rounded'
                    >
                        Logout
                    </button>
                </div>
            </div>
            {view &&
                <SearchPatient {...{ patients, view, setView }} />
            }
        </div>
    );
};

export default Header;