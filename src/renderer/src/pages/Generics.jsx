import { useEffect, useState } from 'react';
import { Heading, Button_Add, Input_Search, DeleteView, AddGeneric, NoDataFound, UpdateGeneric } from '../component/Index';
import { RiEditCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { getDatas } from '../utils/api_crud';
import useUserStore from '../store/userStore';

const Generics = () => {
    const {addGenerics,generics,random,setLoading} = useUserStore()
    const [query, setQuery] = useState('')
    const [id, setId] = useState('')
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    useEffect(() => {
        getDatas({
            path: 'generic',
            setData: addGenerics,
            setLoading
        })
    }, [random])
    return (
        <div
            className='space-y-2'
        >
            <Heading>Generics</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query, setQuery
                }} />
                <Button_Add {...{
                    text: 'Add Generics',
                    view, setView
                }} />
            </div>
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                {generics.length === 0 ?
                    <NoDataFound {...{ data: generics }} />
                    :
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            generics.map(generic=>
                                <tr
                                key={generic._id}
                            className="bg-white border-b  cursor-pointer"
                        >
                            <td scope="row" className="p-2 whitespace-nowrap">
                                {generic.name}
                            </td>
                            <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                <RiEditCircleFill
                                    size={25}
                                    onClick={() => {
                                        setId(generic._id),
                                            setUpdateView(!updateView)
                                    }}
                                    className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                />
                                <MdCancel
                                    size={25}
                                    onClick={() => {
                                        setId(generic._id),
                                            setDeleteView(!deleteView)
                                    }}
                                    className="text-red-400 hover:text-red-500 cursor-pointer"
                                />
                            </td>
                        </tr>
                            )
                        }
                    </tbody>
                </table>
                }
                
            </div>
            {view &&
                <AddGeneric {...{ view, setView }} />
            }
            {updateView &&
                <UpdateGeneric {...{
                    id,
                    view: updateView,
                    setView: setUpdateView
                }} />
            }
            {deleteView &&
                <DeleteView {...{
                    id,
                    path: `generic/${id}`,
                    view: deleteView,
                    setView: setDeleteView
                }} />
            }
        </div>
    );
};

export default Generics;