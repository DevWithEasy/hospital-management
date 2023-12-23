import { useEffect, useState } from "react";
import { AddFloor, Button_Add, Heading, Input_Search } from "../component/Index";
import { useNavigate } from 'react-router-dom';
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";

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
    console.log(data)
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
                                Sl
                            </th>
                            <th scope="col" className="px-2 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Floor No
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data
                                .map((floor,i) =>
                                    <tr
                                        key={floor._id}
                                        onClick={() => navigate(`/floor/${floor._id}`)}
                                        className="bg-white border-b cursor-pointer"
                                    >
                                        <td scope="row" className="p-2 whitespace-nowrap">
                                            {i+1}
                                        </td>
                                        <td scope="row" className="p-2 whitespace-nowrap">
                                            {floor?._id}
                                        </td>
                                        <td className="p-2">
                                            {floor?.floorNo}
                                        </td>
                                        <td className="p-2">
                                            
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