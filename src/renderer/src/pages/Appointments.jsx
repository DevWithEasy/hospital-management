import { useState } from "react";
import {Button_Add, Heading, Input_Search} from "../component/Index";

const Appointments = () => {
    const [view,setView] = useState(false)
    const [query,setQuery] = useState('')
    return (
        <div
            className="space-y-2"
        >
            <Heading>Appointments</Heading>

            <div
                className='flex justify-between items-center'
            >
                <Input_Search {...{
                    query,setQuery
                }}/>
                <Button_Add {...{
                    text: 'Add Appoinment',
                    view,setView
                }}/>
            </div>
        </div>
    );
};

export default Appointments;