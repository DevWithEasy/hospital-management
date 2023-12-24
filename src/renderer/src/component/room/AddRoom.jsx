/* eslint-disable react/prop-types */
import { useState } from "react";
import {Button_Save, Input, Loading} from "../Index";
import {useParams} from 'react-router-dom'
import { create } from "../../utils/api_crud";
import useUserStore from "../../store/userStore";

const AddRoom = ({view,setView}) => {
    const {reload,loading,setLoading} = useUserStore()
    const {id} = useParams()
    const [value,setValue] = useState({
        floorId : id,
        no : '',
        fee : ''
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
                className={`w-11/12 md:w-6/12 lg:w-5/12 bg-white rounded-md shadow-xl ${loading ? 'blur' : ''}`}
            >
                <div
                    className="p-2 flex justify-between items-center text-xl uppercase border-b"
                >
                    <p>
                        Add new room
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
                        path : 'floor/room', 
                        value, 
                        setView, 
                        reload,
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
                <Loading {...{msg : 'Creating new room.'}}/>
            }
        </div>
    );
};

export default AddRoom;