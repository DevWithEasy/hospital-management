import { useState } from "react";
import { AddShedule, Heading } from "../component/Index";
import image from '../assets/demo-user.png'

const Doctor = () => {
    const [view, setView] = useState(false)
    const [doctor, setDoctor] = useState({})
    return (
        <div
            className="space-y-2"
        >
            <Heading>Doctor</Heading>
            <div
                className="flex justify-between gap-2"
            >
                <div
                    className="w-1/2 p-2 bg-white rounded"
                >
                    <div>
                        <img
                            src={doctor?.image ? doctor.image : image}
                            className="h-40 w-40 rounded-full border"
                        />
                    </div>
                    <div>
                        <h2
                            className="p-2 text-center text-lg font-medium border-b uppercase"
                        >
                            Information
                        </h2>
                        <table>
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
                                    {doctor?.name}
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
                                    {doctor?.name}
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
                                    {doctor?.name}
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
                                    {doctor?.name}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div
                    className="w-1/2 p-2 bg-white rounded space-y-2"
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
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                            <tr>
                                <th scope="col" className="px-2 py-3">
                                    Day
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    From
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    To
                                </th>
                                <th scope="col" className="px-2 py-3 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className="bg-white border-b hover:bg-teal-50 cursor-pointer"
                            >
                                <td scope="row" className="p-2 whitespace-nowrap">
                                    Friday
                                </td>
                                <td scope="row" className="p-2 whitespace-nowrap">
                                    13:22
                                </td>
                                <td scope="row" className="p-2 whitespace-nowrap">
                                    20:30
                                </td>
                                <td scope="row" className="p-2 whitespace-nowrap text-center">
                                    De Up
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {view &&
                        <AddShedule {...{view,setView}}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctor;