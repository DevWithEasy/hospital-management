/* eslint-disable react/prop-types */
import { useState } from "react";
import {Button_Save, Input, Loading} from "../Index";
import { update } from "../../utils/api_crud";
import useUserStore from "../../store/userStore";

const UpdateFloor = ({id,view,setView}) => {
    const {floors,loading,setLoading,reload} = useUserStore()
    const [value,setValue] = useState(floors.find(floor=>floor._id === id))

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
                        Update Floor
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
                        path : `floor/${id}`,
                        value,
                        reload,
                        setView,
                        setLoading
                    })}
                    className="p-4 space-y-2"
                >
                    <Input {...{
                        label : 'Name',
                        name : 'name',
                        currentValue : value.name,
                        value,setValue
                    }}/>
                    <Input {...{
                        label : 'No',
                        type : 'number',
                        name : 'no',
                        currentValue : value.no,
                        value,setValue
                    }}/>
                    <Button_Save>
                        Save Changes
                    </Button_Save>
                </form>
            </div>
            {loading &&
                <Loading {...{msg : 'Updating floor.'}}/>
            }
        </div>
    );
};

export default UpdateFloor;