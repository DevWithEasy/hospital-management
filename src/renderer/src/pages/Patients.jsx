import { useState } from "react";
import { Heading, Input_Search } from "../component/Index";
import { useNavigate } from 'react-router-dom';

const Patients = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    return (
        <div
            className='space-y-2'
        >
            <Heading>Patients</Heading>

            <Input_Search {...{ 
                query, setQuery
            }} />
            
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-100">
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
                            onClick={() => navigate(`/patient/fadhfakjsdfha`)}
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

export default Patients;