import { useState } from 'react';
import user_image from '../assets/demo-user.png'
import { SearchPatient } from './Index';
import axios from 'axios'

const Header = () => {
    const [view, setView] = useState(false)
    const [patients,setpatients] = useState([])

    const handleSearch =async (search)=>{
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            if(res.data.length > 0){
                setView(true)
                setpatients(res.data)
            }
        } catch (error) {
            console.log()
        }
    }
    return (
        <div
            className='absolute left-0 top-0 w-full p-2 pr-4 flex justify-between bg-slate-100/50 rounded-tl-md'
        >
            <input
                placeholder='patient name'
                className='w-1/4 sm:w-2/4 p-2 bg-slate-50/80 text-sm border focus:outline-none rounded-md'
                onChange={(e)=>handleSearch(e.target.value)}
            />
            <div
                className='pl-2 pr-4 flex items-center space-x-2 border rounded'
            >
                <img
                    src={user_image}
                    className='h-8 w-8 rounded-full'
                />
                <span>
                    Admin
                </span>
            </div>
            {view &&
                <SearchPatient {...{ patients, view, setView }} />
            }
        </div>
    );
};

export default Header;