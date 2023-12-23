import { useState } from 'react';
import { Heading,AddMedicine, Button_Add, Input_Search } from '../component/Index';
import { RiEditCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';

const Medicines = () => {
    const [view,setView] = useState(false)
    const [query,setQuery] = useState('')
    return (
        <div
            className='space-y-2'
        >
            <Heading>Medicines</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query,setQuery
                }}/>
                <Button_Add {...{
                    text: 'Add Medicine',
                    view,setView
                }}/>
            </div>
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Gemeric
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-2 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="bg-white border-b  cursor-pointer"
                        >
                            <td scope="row" className="p-2 whitespace-nowrap">
                                jdfadshfadsw
                            </td>
                            <td scope="row" className="p-2 whitespace-nowrap">
                                Apple Mac
                            </td>
                            <td scope="row" className="p-2 whitespace-nowrap">
                                Apple Mac
                            </td>
                            <td className="p-2">
                                345
                            </td>
                            <td className="p-2">
                                345
                            </td>
                            <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                    <RiEditCircleFill 
                                        size={25}
                                        onClick={()=>{}}
                                        className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                    />
                                    <MdCancel 
                                        size={25}
                                        onClick={()=>{}}
                                        className="text-red-400 hover:text-red-500 cursor-pointer"
                                    />
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {view &&
                <AddMedicine {...{view,setView}}/>
            }
        </div>
    );
};

export default Medicines;