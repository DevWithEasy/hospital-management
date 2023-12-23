import { useState } from "react";
import {AddRoom, Button_Add, Heading} from "../component/Index";

const Floor = () => {
    const [view,setView] = useState(false)
    return (
        <div
            className="space-y-2"
        >
            <Heading>Floor</Heading>
            
            <div
                className="flex justify-end"
            >
                <Button_Add {...{
                    text: 'Add Room',
                    view,setView
                }}/>
            </div>

            {view &&
                <AddRoom {...{view,setView}}/>
            }
        </div>
    );
};

export default Floor;