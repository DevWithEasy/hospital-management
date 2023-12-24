import { useEffect, useState } from "react";
import { AddFloor, Button_Add, Heading, Input_Search } from "../component/Index";
import { useNavigate } from 'react-router-dom';
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";
import { RiEditCircleFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

const Floors = () => {
    const { random } = useUserStore()
    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        getDatas({
            path: 'floor',
            setData
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
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-2 py-3 text-center">
                                Floor No
                            </th>
                            <th scope="col" className="px-2 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.filter(d=>String(d.floorNo).includes(query))
                                .map((floor) =>
                                    <tr
                                        key={floor._id}
                                        className="bg-white border-b cursor-pointer"
                                    >
                                        <td scope="row" className="p-2 whitespace-nowrap">
                                            {floor?._id}
                                        </td>
                                        <td className="p-2 text-center">
                                            {floor?.floorNo}
                                        </td>
                                        <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                        <IoInformationCircleOutline
                                                size={25}
                                                onClick={() => navigate(`/floor/${floor._id}`)}
                                                className="text-green-400 hover:text-green-500 cursor-pointer"
                                            />
                                            <RiEditCircleFill
                                                size={25}
                                                onClick={() => { }}
                                                className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                            />
                                            <MdCancel
                                                size={25}
                                                onClick={() => { }}
                                                className="text-red-400 hover:text-red-500 cursor-pointer"
                                            />
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {view &&
                <AddFloor {...{ view, setView }} />
            }
        </div>
    );
};

export default Floors;