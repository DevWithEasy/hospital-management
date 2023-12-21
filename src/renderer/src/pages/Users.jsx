import { useState } from "react";
import {Heading} from "../component/Index";
import {useNavigate} from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate()
    const [view,setView] = useState(false)
    return (
        <div
            className="space-y-2"
        >
            <Heading>Users</Heading>
            <button
                onClick={()=>setView(!view)}
                className='px-4 py-2 bg-teal-500 text-white rounded-md'
            >
                Add User
            </button>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            onClick={()=>navigate(`/user/fadhfakjsdfha`)}
                            className="bg-white border-b hover:bg-teal-50 cursor-pointer"
                        >
                            <td scope="row" className="p-2 whitespace-nowrap">
                                jdfadshfadsw
                            </td>
                            <td scope="row" className="p-2 whitespace-nowrap">
                                Apple MacBook Pro 17&quot;
                            </td>
                            <td className="p-2">
                                Silver
                            </td>
                            <td className="p-2">
                                01717642515
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;