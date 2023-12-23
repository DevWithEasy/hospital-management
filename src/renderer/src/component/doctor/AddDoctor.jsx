/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Toast } from "../Index";
import axios from "axios";
import toast from 'react-hot-toast'

const AddDoctor = ({ view, setView }) => {
    const [value, setValue] = useState({
        name: '',
        specialist: '',
        education: '',
        experienceArea: '',
        consultationFee: ''
    })
    const [image, setImage] = useState(null)

    const handleAddDoctor = async (e) => {
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
            className='h-screen fixed -top-2 left-0 w-full flex justify-center items-center bg-gray-500/50 overflow-y-auto'
        >
            <div
                className='w-10/12 md:w-10/12 lg:w-5/12 md:my-10 bg-white rounded-md shadow-'
            >
                <div
                    className="p-2 flex justify-between items-center text-xl uppercase border-b"
                >
                    <p>
                        Add new doctor
                    </p>
                    <button
                        onClick={() => setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e) => handleAddDoctor(e)}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label: 'Name',
                        name: 'name',
                        currentValue: value.name,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'Specialist',
                        name: 'specialist',
                        currentValue: value.specialist,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'Education',
                        name: 'education',
                        currentValue: value.education,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'Experience Area',
                        name: 'experienceArea',
                        currentValue: value.experienceArea,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'Consultation Fee',
                        type: 'number',
                        name: 'consultationFee',
                        currentValue: value.consultationFee,
                        value, setValue
                    }} />
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Photo</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full p-2 border rounded"
                        />
                    </div>
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

export default AddDoctor;