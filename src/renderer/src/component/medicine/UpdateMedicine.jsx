/* eslint-disable react/prop-types */
import { useState } from "react";
import {Input, Toast} from "../Index";
import axios  from "axios";
import toast from 'react-hot-toast'

const UpdateMedicine = ({view,setView}) => {
    const [value,setValue] = useState({
        name : '',
        type : '',
        price : ''
    })

    const types = ['Tablet', 'Capsule', 'Syrup', 'Others']

    const handleUpdateMedicine=async(e)=>{
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
                        Add new medicine
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e)=>handleUpdateMedicine(e)}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label : 'Name',
                        type : 'text',
                        name : 'name',
                        currentValue : value.name,
                        value,setValue
                    }}/>
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Day :</label>
                        <select
                            className="w-full p-2 border rounded"
                        >
                            <option>Select Type</option>
                            {
                                types.map(type => <option key={type} value=''>{type}</option>)
                            }
                        </select>
                    </div>
                    <Input {...{
                        label : 'price',
                        type : 'number',
                        name : 'price',
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

export default UpdateMedicine;