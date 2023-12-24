/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Loading } from "../Index";
import useUserStore from "../../store/userStore";
import { update } from "../../utils/api_crud";

const UpdateDoctor = ({ id, view, setView }) => {
    const { doctors, loading, setLoading, reload } = useUserStore()
    const [value, setValue] = useState(doctors.find(doctor => doctor._id === id))

    const [image, setImage] = useState(null)

    const formData = new FormData()
    formData.append('name', value.name)
    formData.append('specialist', value.specialist)
    formData.append('education', value.education)
    formData.append('experienceArea', value.experienceArea)
    formData.append('consultationFee', value.consultationFee)
    formData.append('image', image)

    const handleView = (e) => {
        if (e.target.id === 'wrapper') {
            setView(!view)
        }
    }

    return (
        <div
            id="wrapper"
            onClick={handleView}
            className='h-screen fixed -top-2 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className={`w-10/12 md:w-10/12 lg:w-8/12 md:my-10 bg-white rounded-md ${loading ? 'blur' : ''}`}
            >
                <div
                    className="p-2 flex justify-between items-center text-xl font-semibold uppercase border-b"
                >
                    <p>
                        Update doctor
                    </p>
                    <button
                        onClick={() => setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e) => update({
                        e,
                        path: `doctor/${id}`,
                        value : formData,
                        setLoading,
                        reload,
                        setView
                    })}
                    className="p-4 space-y-2"
                >
                    <div
                        className="grid grid-cols-2 gap-2"
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
                                className="w-full p-1.5 border rounded"
                            />
                        </div>
                    </div>
                    <button
                        className="px-6 py-2 bg-teal-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
            {loading &&
                <Loading {...{ msg: 'Updating doctor profile.' }} />
            }
        </div>
    );
};

export default UpdateDoctor;