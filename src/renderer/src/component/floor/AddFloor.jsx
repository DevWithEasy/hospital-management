/* eslint-disable react/prop-types */
import { useState } from "react";
import {Input, Toast} from "../Index";
import axios  from "axios";
import toast from 'react-hot-toast'

const AddFloor = ({view,setView}) => {
    const [value,setValue] = useState({
        floorNo : ''
    })

    const handleAddFloor=async(e)=>{
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
            className='h-screen fixed -top-2 left-0 w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl'
            >
                <div
                    className="p-2 flex justify-between items-center text-xl uppercase border-b"
                >
                    <p>
                        Add new doctor
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e)=>handleAddFloor(e)}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label : 'Floor No',
                        type : 'number',
                        name : 'floorNo',
                        currentValue : value.floorNo,
                        value,setValue
                    }}/>
                    <button
                        className="px-6 py-2 bg-teal-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFloor;