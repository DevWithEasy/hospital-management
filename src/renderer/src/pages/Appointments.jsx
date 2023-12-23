import { useState } from "react";
import {Heading, Input_Search} from "../component/Index";

const Appointments = () => {
    const [query,setQuery] = useState('')
    return (
        <div
            className="space-y-2"
        >
            <Heading>Appointments</Heading>

            <Input_Search {...{
                    query,setQuery
                }}/>
        </div>
    );
};

export default Appointments;