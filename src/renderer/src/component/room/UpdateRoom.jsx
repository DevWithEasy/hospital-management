/* eslint-disable react/prop-types */
import { useState } from "react";
import {Input, Toast} from "../Index";
import axios  from "axios";
import toast from 'react-hot-toast'

const UpdateRoom = ({view,setView}) => {
    const [value,setValue] = useState({
        floorNo : ''
    })

    const handleUpdateRoom=async(e)=>{
        e.preventDefault()
        if(!value.floorNo){
            toast.custom((t)=><Toast {...{
                t,
                type : 'error',
                message : 'Please insert floor no.'
            }}/>)
        }
        try {
            const res = await axios.post('')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

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
                className='w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl'
            >
                <h2
                    className="p-2 text-center border-b"
                >
                    Add new floor
                </h2>
                <form
                    onSubmit={(e)=>handleUpdateRoom(e)}
                    className="p-4"
                >
                    <Input {...{
                        label : 'Floor No',
                        type : 'number',
                        name : 'floorNo',
                        currentValue : value.floorNo,
                        value,setValue
                    }}/>
                    <button
                        className="px-4 py-2 bg-teal-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateRoom;