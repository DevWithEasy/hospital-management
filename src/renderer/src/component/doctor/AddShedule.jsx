/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Toast } from "../Index";
import axios from "axios";
import toast from 'react-hot-toast'

const AddShedule = ({ view, setView }) => {
    const [value, setValue] = useState({
        name: '',
        specialist: '',
        education: '',
        experienceArea: '',
        consultationFee: ''
    })

    const days= ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

    const handleAddShedule = async (e) => {
        e.preventDefault()
        if (!value.floorNo) {
            toast.custom((t) => <Toast {...{
                t,
                type: 'error',
                message: 'Please insert floor no.'
            }} />)
        }
        try {
            const res = await axios.post('')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleView = (e) => {
        if (e.target.id === 'wrapper') {
            setView(!view)
        }
    }

    return (
        <div
            id="wrapper"
            onClick={handleView}
            className='h-screen fixed top-0 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl'
            >
                <h2
                    className="p-2 text-xl uppercase border-b"
                >
                    Add new shedule
                </h2>
                <form
                    onSubmit={(e) => handleAddShedule(e)}
                    className="p-4 space-y-2"
                >
                    <div
                        className="space-y-2"
                    >
                    <label className="text-gray-500 text-base">Day :</label>
                    <select
                        className="w-full p-2 border rounded"
                    >
                        <option>Select day</option>
                        {
                            days.map(day=><option key={day} value=''>{day}</option>)
                        }
                    </select>
                    </div>
                    <Input {...{
                        label: 'From',
                        type : 'time',
                        name: 'from',
                        currentValue: value.from,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'To',
                        type : 'time',
                        name: 'to',
                        currentValue: value.to,
                        value, setValue
                    }} />
                    <button
                        className="px-6 py-2 bg-teal-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddShedule;