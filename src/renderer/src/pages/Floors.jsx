import { useState } from "react";
import {AddFloor, Button_Add, Heading, Input_Search} from "../component/Index";
import {useNavigate} from 'react-router-dom';

const Floors = () => {
    const navigate = useNavigate()
    const [view,setView] = useState(false)
    const [query,setQuery] = useState('')
    return (
        <div
            className="space-y-2"
        >
            <Heading>Floors</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query,setQuery
                }}/>
                <Button_Add {...{
                    text: 'Add Floor',
                    view,setView
                }}/>
            </div>
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
                            onClick={()=>navigate(`/floor/fadhfakjsdfha`)}
                            className="bg-white border-b cursor-pointer"
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
            {view &&
                <AddFloor {...{view,setView}}/>
            }
        </div>
    );
};

export default Floors;