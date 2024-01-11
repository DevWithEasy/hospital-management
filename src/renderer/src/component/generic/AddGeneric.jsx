/* eslint-disable react/prop-types */
import { useState } from "react";
import {Input} from "../Index";
import { create } from "../../utils/api_crud";
import useUserStore from "../../store/userStore";

const AddGeneric = ({view,setView}) => {
    const {reload,setLoading} = useUserStore()
    const [value,setValue] = useState({
        name : ''
    })

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
                        Add new generics
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className="px-3 hover:text-red-500"
                    >
                        X
                    </button>
                </div>
                <form
                    onSubmit={(e)=>create({
                        e,
                        path : 'generic',
                        value,
                        setView,
                        reload,
                        setLoading
                    })}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label : 'Name',
                        type : 'text',
                        name : 'name',
                        currentValue : value.name,
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

export default AddGeneric;