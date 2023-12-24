import { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { AddFloor, Button_Add, DeleteView, Heading, Input_Search, UpdateFloor, NoDataFound } from "../component/Index";
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";

const Floors = () => {
    const { random, setLoading, floors, addfloors } = useUserStore()
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        getDatas({
            path: 'floor',
            setData: addfloors,
            setLoading
        })
    }, [random])

    return (
        <div
            className="space-y-2"
        >
            <Heading>Floors</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query, setQuery
                }} />
                <Button_Add {...{
                    text: 'Add Floor',
                    view, setView
                }} />
            </div>
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                {floors.length === 0 ?
                    <NoDataFound {...{ data: floors }} />
                    :
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                            <tr
                                className="text-center"
                            >
                                <th scope="col" className="p-2">
                                    Name
                                </th>
                                <th scope="col" className="p-2">
                                    Floor No
                                </th>
                                <th scope="col" className="p-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {floors &&
                                floors.filter(floor => String(floor.no).includes(query) || floor.name.toLowerCase().includes(query))
                                    .map((floor) =>
                                        <tr
                                            key={floor._id}
                                            className="bg-white border-b text-center cursor-pointer"
                                        >
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {floor?.name}
                                            </td>
                                            <td className="p-2 text-center">
                                                {floor?.no}
                                            </td>
                                            <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                                <IoInformationCircleOutline
                                                    size={25}
                                                    onClick={() => navigate(`/floor/${floor._id}`)}
                                                    className="text-green-400 hover:text-green-500 cursor-pointer"
                                                />
                                                <RiEditCircleFill
                                                    size={25}
                                                    onClick={() => {
                                                        setId(floor._id),
                                                        setUpdateView(!updateView)
                                                    }}
                                                    className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                                />
                                                <MdCancel
                                                    size={25}
                                                    onClick={() => {
                                                        setId(floor._id),
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
                <AddFloor {...{ view, setView }} />
            }
            {updateView &&
                <UpdateFloor {...{
                    id,
                    view: updateView,
                    setView: setUpdateView
                }} />
            }
            {deleteView &&
                <DeleteView {...{
                    id,
                    path: `floor/${id}`,
                    view: deleteView,
                    setView: setDeleteView
                }} />
            }
        </div>
    );
};

export default Floors;