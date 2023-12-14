import { useState } from "react";
import {Heading, Input} from "../component/Index";
import handleChange from "../utils/handleChange";

const NewPatient = () => {
    const [value,setValue] = useState({

    })
    return (
        <div>
            <Heading>New Patient</Heading>
            <div
                className="space-y-2"
            >
                <div
                    className="grid grid-cols-2 gap-2"
                >
                    <Input {...{
                        value,setValue,
                        name : 'name',
                        placeholder : 'Name'
                    }}/>
                    <Input {...{
                        value,setValue,
                        name : 'age',
                        placeholder : 'Age'
                    }}/>
                    <Input {...{
                        value,setValue,
                        name : 'mobile',
                        placeholder : 'Mobile no'
                    }}/>
                    <Input {...{
                        value,setValue,
                        name : 'address',
                        placeholder : 'Address'
                    }}/>
                </div>
                <div
                    className="grid grid-cols-2 gap-2"
                >
                    <select
                        onChange={(e)=>handleChange(e,value,setValue)}
                        className="w-full p-2 rounded"
                    >
                        <option>Select Floor</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default NewPatient;