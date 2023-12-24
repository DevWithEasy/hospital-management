import { useEffect, useState } from "react";
import { AddRoom, Button_Add, DeleteView, Heading, Input_Search, NoDataFound, UpdateRoom } from "../component/Index";
import { RiEditCircleFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";
import { useParams } from 'react-router-dom'

const Floor = () => {
    const { id } = useParams()
    const { rooms, addRooms, random, setLoading } = useUserStore()
    const [currentId, setCurrentId] = useState('')
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        getDatas({
            path: `floor/rooms/${id}`,
            setData: addRooms,
            setLoading
        })
    }, [random])

    return (
        <div
            className="space-y-2"
        >
            <Heading>Floor</Heading>

            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query, setQuery
                }} />
                <Button_Add {...{
                    text: 'Add Room',
                    view, setView
                }} />
            </div>

            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                {
                    rooms.length > 0 && <p
                        className="p-2 mb-2 inline-block text-gray-500 text-sm space-x-1 items-center bg-gray-50 rounded-md"
                    >
                        <span>{rooms[0].floorId.no}</span>
                        <span>({rooms[0].floorId.name})</span>
                    </p>
                }
                {rooms.length === 0 ?
                    <NoDataFound {...{ data: rooms }} />
                    :
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                            <tr
                                className="text-center"
                            >
                                <th scope="col" className="p-2">
                                    Room No
                                </th>
                                <th scope="col" className="p-2">
                                    Rent Fee
                                </th>
                                <th scope="col" className="p-2">
                                    Available
                                </th>
                                <th scope="col" className="p-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms &&
                                rooms.filter(room => String(room.no).includes(query) || room.name.toLowerCase().includes(query))
                                    .map(room =>
                                        <tr
                                            key={room._id}
                                            className="bg-white border-b text-center  cursor-pointer"
                                        >
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {room.no}
                                            </td>
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {room.fee}
                                            </td>
                                            <td className="p-2">
                                                {room.isAvailable ? 'Yes' : 'No'}
                                            </td>
                                            <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                                <RiEditCircleFill
                                                    size={25}
                                                    onClick={() => {
                                                        setCurrentId(room._id),
                                                            setUpdateView(!updateView)
                                                    }}
                                                    className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                                />
                                                <MdCancel
                                                    size={25}
                                                    onClick={() => {
                                                        setCurrentId(room._id),
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
                <AddRoom {...{ view, setView }} />
            }
            {updateView &&
                <UpdateRoom {...{
                    id: currentId,
                    view: updateView,
                    setView: setUpdateView
                }} />
            }
            {deleteView &&
                <DeleteView {...{
                    id: currentId,
                    path: `floor/room/${id}/${currentId}`,
                    view: deleteView,
                    setView: setDeleteView
                }} />
            }
        </div>
    );
};

export default Floor;