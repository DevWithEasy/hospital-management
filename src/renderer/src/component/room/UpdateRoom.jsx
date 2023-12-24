/* eslint-disable react/prop-types */
import { useState } from "react";
import {Button_Save, Input, Loading} from "../Index";
import useUserStore from "../../store/userStore";
import { update } from "../../utils/api_crud";

const UpdateRoom = ({id,view,setView}) => {
    const {rooms,reload,loading,setLoading} = useUserStore()
    const [value,setValue] = useState(rooms.find(room=>room._id === id))

    const handleView=(e)=>{
        if(e.target.id === 'wrapper'){
            setView(!view)
        }
    }
    
    return (
        <div
            id="wrapper"
            onClick={handleView}
            className='h-screen fixed top-0 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className={`w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl ${loading ? 'blur' : ''}`}
            >
                <div
                    className="p-2 flex justify-between items-center text-xl uppercase border-b"
                >
                    <p>
                        Update Room
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e)=>update({
                        e, 
                        path : `floor/room/${id}`, 
                        value, 
                        reload,
                        setView, 
                        setLoading 
                    })}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label : 'Room No',
                        type : 'number',
                        name : 'no',
                        currentValue : value.no,
                        value,setValue
                    }}/>

                    <Input {...{
                        label : 'Rent Fee',
                        type : 'number',
                        name : 'fee',
                        currentValue : value.fee,
                        value,setValue
                    }}/>

                    <Button_Save>
                        Submit
                    </Button_Save>
                </form>
            </div>
            {loading &&
                <Loading {...{msg : 'Updating room'}}/>
            }
        </div>
    );
};

export default UpdateRoom;