/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toast} from "../Index";
import axios  from "axios";

const DeleteView = ({id,path,deleteView,setDeleteView}) => {
    const [value,setValue] = useState({
        floorNo : ''
    })

    const handleDelete=async(e)=>{
        e.preventDefault()
        if(!value.floorNo){
            Toast.custom((t)=><Toast {...{
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
            setDeleteView(!deleteView)
        }
    }
    
    return (
        <div
            id="wrapper"
            onClick={handleView}
            className='h-screen fixed top-0 left-0 w-full flex justify-center items-center'
        >
            <div
                className=''
            >
                <h2
                    className="p-2 text-center border-b"
                >
                    Are you sure ?
                </h2>
                <div
                    className="p-4"
                >

                </div>
            </div>
        </div>
    );
};

export default DeleteView;