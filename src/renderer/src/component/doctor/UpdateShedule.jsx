/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button_Save, Input, } from "../Index";
import { update } from "../../utils/api_crud";
import handleChange from "../../utils/handleChange";
import useUserStore from "../../store/userStore";

const UpdateShedule = ({ data, view, setView }) => {
    const {reload,loading,setLoading} = useUserStore()
    const [value, setValue] = useState(data)

    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

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
                className={`w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl ${loading ? 'blur' : ''}`}
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
                    onSubmit={(e) => update({
                        e,
                        path : `doctor/shedule/${value._id}`,
                        value,
                        setView,
                        reload,
                        setLoading
                    })}
                    className="p-4 space-y-2"
                >
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Day :</label>
                        <select
                            name='day'
                            value = {value.day}
                            onChange={(e) => handleChange(e, value, setValue)}
                            className="w-full p-2 border rounded"
                        >
                            <option>Select day</option>
                            {
                                days.map(day => <option key={day} value={day}>{day}</option>)
                            }
                        </select>
                    </div>
                    <Input {...{
                        label: 'From',
                        type: 'time',
                        name: 'from',
                        currentValue: value.from,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'To',
                        type: 'time',
                        name: 'to',
                        currentValue: value.to,
                        value, setValue
                    }} />
                    <Button_Save>
                        Save changes
                    </Button_Save>
                </form>
            </div>
        </div>
    );
};

export default UpdateShedule;