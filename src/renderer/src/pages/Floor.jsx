import { useState } from "react";
import {AddRoom, Heading} from "../component/Index";

const Floor = () => {
    const [view,setView] = useState(false)
    return (
        <div
            className="space-y-2"
        >
            <Heading>Floor</Heading>
            <button
                onClick={()=>setView(!view)}
                className='px-4 py-2 bg-teal-500 text-white rounded-md'
            >
                Add Room
            </button>
            {view &&
                <AddRoom {...{view,setView}}/>
            }
        </div>
    );
};

export default Floor;