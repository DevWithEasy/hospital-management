import { useRef, useState } from "react";
import { Heading, Input } from "../component/Index";
import AvailableRoom from "../component/AvailableRoom";

const NewPatient = () => {
    const roomRef = useRef(null)
    const [view, setView] = useState(false)

    const [value, setValue] = useState({
        name: '',
        age: '',
        mobile: '',
        address: '',
        floor: '',
        room: ''
    })

    return (
        <div>
            <Heading>New Patient</Heading>
            <form
                className="space-y-2"
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
                            value={`${value.floor && value.room ? `Floor : ${value.floor}, Room No: ${value.room}` : ''}`}
                            onFocus={() => setView(!view)}
                            className="w-full p-2 rounded"
                            readOnly
                        />
                    </div>
                </div>
            </form>
            {view &&
                    <AvailableRoom {...{ roomRef, view, setView, value, setValue }} />
                }
        </div>
    );
};

export default NewPatient;