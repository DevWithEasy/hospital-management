import { useEffect, useState } from "react";
import { AddShedule, DeleteView, Heading, NoDataFound } from "../component/Index";
import image from '../assets/demo-user.png'
import { MdCancel } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { useParams } from 'react-router-dom'
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";
import UpdateShedule from "../component/doctor/UpdateShedule";
import formateTime from "../utils/formateTime";

const Doctor = () => {
    const { id } = useParams()
    const { doctors, random, setLoading } = useUserStore()
    const [currentDoc, setCurrentDoc] = useState({})
    const [view, setView] = useState(false)
    const [updateView, setUpdateView] = useState(false)
    const [deleteView, setDeleteView] = useState(false)
    const [doctor, setDoctor] = useState(doctors.find(doctor => doctor._id = id))

    useEffect(() => {
        getDatas({
            path: `doctor/${id}`,
            setData: setDoctor,
            setLoading
        })
    }, [random])
    return (
        <div
            className="space-y-2"
        >
            <Heading>Doctor</Heading>
            <div
                className="flex justify-between md:flex-col lg:flex-row gap-2"
            >
                <div
                    className="md:w-full lg:w-1/2 p-2 md:flex bg-white rounded"
                >
                    <div
                        className="w-4/12 md:flex justify-center items-center"
                    >
                        <img
                            src={doctor?.image ? doctor.image.url : image}
                            className="h-40 w-40 rounded-full border"
                        />
                    </div>
                    <div
                        className="w-8/12"
                    >
                        <h2
                            className="p-2 text-center text-lg font-medium border-b uppercase"
                        >
                            Information
                        </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        Name
                                    </td>
                                    <td
                                        className="px-3 py-2"
                                    > : </td>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        {doctor?.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        Spacialist
                                    </td>
                                    <td
                                        className="px-3 py-2"
                                    > : </td>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        {doctor?.specialist}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        Experience
                                    </td>
                                    <td
                                        className="px-3 py-2"
                                    > : </td>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        {doctor?.experienceArea}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        Education
                                    </td>
                                    <td
                                        className="px-3 py-2"
                                    > : </td>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        {doctor?.education}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        Consultaion Fee
                                    </td>
                                    <td
                                        className="px-3 py-2"
                                    > : </td>
                                    <td
                                        className="px-3 py-2"
                                    >
                                        {doctor?.consultationFee}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div
                    className="md:w-full lg:w-1/2 p-2 bg-white rounded space-y-2"
                >
                    <div
                        className="p-2 border-b flex justify-between items-center"
                    >
                        <span
                            className="text-lg font-medium uppercase"
                        >
                            Appointment Shedules
                        </span>
                        <button
                            onClick={() => setView(!view)}
                            className='px-4 py-2 bg-teal-500 text-white rounded-md'
                        >
                            Add Shedule
                        </button>
                    </div>
                    {doctor.shedules.length === 0 ?
                        <NoDataFound {...{ data: doctor.shedules }} />
                        :
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 text-center uppercase bg-slate-200">
                                <tr>
                                    <th scope="col" className="p-2">
                                        Day
                                    </th>
                                    <th scope="col" className="p-2">
                                        From
                                    </th>
                                    <th scope="col" className="p-2">
                                        To
                                    </th>
                                    <th scope="col" className="p-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctor.shedules.map(shedule =>
                                        <tr
                                            key={shedule._id}
                                            className="text-center bg-white border-b cursor-pointer"
                                        >
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {shedule.day}
                                            </td>
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {formateTime(shedule.from)}
                                            </td>
                                            <td scope="row" className="p-2 whitespace-nowrap">
                                                {formateTime(shedule.to)}
                                            </td>
                                            <td scope="row" className="p-2 flex justify-center items-center space-x-3 whitespace-nowrap text-center">
                                                <RiEditCircleFill
                                                    size={25}
                                                    onClick={() => {
                                                        setCurrentDoc(shedule),
                                                        setUpdateView(!updateView)
                                                    }}
                                                    className="text-teal-400 hover:text-teal-500 cursor-pointer"
                                                />
                                                <MdCancel
                                                    size={25}
                                                    onClick={() => {
                                                        setCurrentDoc(shedule),
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
                    {view &&
                        <AddShedule {...{ id, view, setView }} />
                    }
                    {updateView &&
                        <UpdateShedule {...{
                            data: currentDoc,
                            view: updateView,
                            setView: setUpdateView
                        }} />
                    }
                    {deleteView &&
                        <DeleteView {...{
                            path: `doctor/shedule/${currentDoc._id}`,
                            view: deleteView,
                            setView: setDeleteView
                        }} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctor;