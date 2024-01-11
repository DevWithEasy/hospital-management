import { useEffect, useState } from 'react';
import { Heading, AddMedicine, Button_Add, Input_Search, NoDataFound, UpdateMedicine, DeleteView } from '../component/Index';
import { RiEditCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import useUserStore from '../store/userStore';
import { getDatas } from '../utils/api_crud';

const Medicines = () => {
    const { addMedicines, medicines, random, setLoading } = useUserStore()
    const [query, setQuery] = useState('')
    const [id, setId] = useState('')
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)

    useEffect(() => {
        getDatas({
            path: 'medicine',
            setData: addMedicines,
            setLoading
        })
    }, [random])
    return (
        <div
            className='space-y-2'
        >
            <Heading>Medicines</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query, setQuery
                }} />
                <Button_Add {...{
                    text: 'Add Medicine',
                    view, setView
                }} />
            </div>
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                {medicines.length === 0 ?
                    <NoDataFound {...{ data: medicines }} />
                    :
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
                            {
                                medicines.map(medicine => <tr
                                    key={medicine._id}
                                    className="bg-white border-b  cursor-pointer"
                                >
                                    <td scope="row" className="p-2 whitespace-nowrap">
                                        {medicine.name}
                                    </td>
                                    <td scope="row" className="p-2 whitespace-nowrap">
                                        {medicine.generic.name}
                                    </td>
                                    <td scope="row" className="p-2 whitespace-nowrap">
                                        {medicine.type}
                                    </td>
                                    <td className="p-2">
                                        {medicine.price}
                                    </td>
                                    <td className="p-2">
                                        {medicine.stock}
                                    </td>
                                    <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                        <RiEditCircleFill
                                            size={25}
                                            onClick={() => {
                                                setId(medicine._id),
                                                    setUpdateView(!updateView)
                                            }}
                                            className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                        />
                                        <MdCancel
                                            size={25}
                                            onClick={() => {
                                                setId(medicine._id),
                                                    setDeleteView(!deleteView)
                                            }}
                                            className="text-red-400 hover:text-red-500 cursor-pointer"
                                        />
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                }

            </div>
            {view &&
                <AddMedicine {...{ view, setView }} />
            }
            {updateView &&
                <UpdateMedicine {...{
                    id,
                    view: updateView,
                    setView: setUpdateView
                }} />
            }
            {deleteView &&
                <DeleteView {...{
                    id,
                    path: `medicine/${id}`,
                    view: deleteView,
                    setView: setDeleteView
                }} />
            }
        </div>
    );
};

export default Medicines;