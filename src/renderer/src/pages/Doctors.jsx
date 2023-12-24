import { useEffect, useState } from "react";
import { AddDoctor, Button_Add, DeleteView, Heading, Input_Search, NoDataFound, UpdateDoctor } from "../component/Index";
import { useNavigate } from 'react-router-dom';
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

const Doctors = () => {
    const navigate = useNavigate()
    const { setLoading, doctors, addDoctors,random } = useUserStore()
    const [id, setId] = useState('')
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(()=>{
        getDatas({
            path : 'doctor',
            setData : addDoctors,
            setLoading
        })
    },[random])

    return (
        <div
            className="space-y-2"
        >
            <Heading>Doctors</Heading>
            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query, setQuery
                }} />
                <Button_Add {...{
                    text: 'Add Doctor',
                    view, setView
                }} />
            </div>
            <div className="relative overflow-x-auto p-2 bg-white rounded-md">
                {doctors.length === 0 ?
                    <NoDataFound {...{ data: doctors }} />
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
                                    Specialist
                                </th>
                                <th scope="col" className="p-2">
                                    Consultation Fee
                                </th>
                                <th scope="col" className="p-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors &&
                                doctors.filter(doctor => doctor.name.toLowerCase().includes(query) || doctor.specialist.toLowerCase().includes(query))
                                    .map((doctor) =>
                                        <tr
                                            key={doctor._id}
                                            className="bg-white border-b text-center cursor-pointer"
                                        >
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {doctor?.name}
                                            </td>
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {doctor?.specialist}
                                            </td>
                                            <td className="p-2">
                                                {doctor?.consultationFee}
                                            </td>
                                            <td className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                                <IoInformationCircleOutline
                                                    size={25}
                                                    onClick={() => navigate(`/doctor/${doctor._id}`)}
                                                    className="text-green-400 hover:text-green-500 cursor-pointer"
                                                />
                                                <RiEditCircleFill
                                                    size={25}
                                                    onClick={() => {
                                                        setId(doctor._id),
                                                        setUpdateView(!updateView)
                                                    }}
                                                    className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                                />
                                                <MdCancel
                                                    size={25}
                                                    onClick={() => {
                                                        setId(doctor._id),
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
                <AddDoctor {...{ view, setView }} />
            }
            {updateView &&
                <UpdateDoctor {...{
                    id,
                    view: updateView,
                    setView: setUpdateView
                }} />
            }
            {deleteView &&
                <DeleteView {...{
                    id,
                    path: `doctor/${id}`,
                    view: deleteView,
                    setView: setDeleteView
                }} />
            }
        </div>
    );
};

export default Doctors;