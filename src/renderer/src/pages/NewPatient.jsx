import { useEffect, useRef, useState } from "react";
import { Heading, Input, Loading } from "../component/Index";
import AvailableRoom from "../component/AvailableRoom";
import useUserStore from "../store/userStore";
import { getDatas } from "../utils/api_crud";

const NewPatient = () => {
    const { floorRooms, addFloorRooms, loading, setLoading } = useUserStore()
    const roomRef = useRef(null)
    const [view, setView] = useState(false)

    const [value, setValue] = useState({
        name: '',
        age: '',
        mobile: '',
        address: '',
        f_id: '',
        r_id: ''
    })

    useEffect(() => {
        getDatas({
            path: 'floor/rooms',
            setData: addFloorRooms,
            setLoading
        })
    }, [])

    const _f = floorRooms?.find(floor=>floor._id === value.f_id)
    const _r = _f?.rooms?.find(room=>room._id === value.r_id)
    
    return (
        <div
            className="space-y-2"
        >
            <Heading>New Patient</Heading>
            <form
                className="p-2 space-y-2 bg-white rounded-md"
            >
                <div
                    className="grid grid-cols-2 gap-2"
                >
                    <Input {...{
                        value, setValue,
                        currentValue: value.name,
                        name: 'name',
                        label: 'Name'
                    }} />
                    <Input {...{
                        value, setValue,
                        currentValue: value.age,
                        name: 'age',
                        label: 'Age'
                    }} />
                    <Input {...{
                        value, setValue,
                        currentValue: value.mobile,
                        name: 'mobile',
                        label: 'Mobile no'
                    }} />
                    <Input {...{
                        value, setValue,
                        currentValue: value.address,
                        name: 'address',
                        label: 'Address'
                    }} />
                </div>
                <div
                    className="grid grid-cols-2 gap-2"
                >
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Floor And Room</label>
                        <input
                            ref={roomRef}
                            value={`${value.f_id && value.r_id ? `Floor : ${_f?.name}, Room No: ${_r?.no}` : ''}`}
                            onFocus={() => setView(!view)}
                            className="w-full p-2 border rounded-md"
                            readOnly
                        />
                    </div>
                </div>
                <button
                    className="px-4 py-2 bg-teal-500 text-white rounded-md"
                >
                    Submit
                </button>
            </form>
            {view &&
                <AvailableRoom {...{
                    data : floorRooms,
                    roomRef, view, setView, value, setValue 
                }} />
            }
            {loading &&
                <Loading {...{msg : 'Finding available rooms'}}/>
            }
        </div>
    );
};

export default NewPatient;