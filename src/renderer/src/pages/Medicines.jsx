import { useState } from 'react';
import { Heading,AddMedicine } from '../component/Index';

const Medicines = () => {
    const [view,setView] = useState(false)
    return (
        <div
            className='space-y-2'
        >
            <Heading>Medicines</Heading>
            <button
                onClick={()=>setView(!view)}
                className='px-4 py-2 bg-teal-500 text-white rounded-md'
            >
                Add Medicines
            </button>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Name
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
                            <th scope="col" className="px-2 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="bg-white border-b hover:bg-teal-50 cursor-pointer"
                        >
                            <td scope="row" className="p-2 whitespace-nowrap">
                                jdfadshfadsw
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
                            <td className="p-2">
                                De Up
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