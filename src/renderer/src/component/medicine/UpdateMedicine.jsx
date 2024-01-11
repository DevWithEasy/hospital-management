/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {Input, Loading} from "../Index";
import useUserStore from "../../store/userStore";
import { getDatas, update } from "../../utils/api_crud";
import handleChange from "../../utils/handleChange";

const UpdateMedicine = ({id,view,setView}) => {
    const {addGenerics,generics,medicines,loading,setLoading,reload} = useUserStore()
    const [value,setValue] = useState(medicines.find(medicine=>medicine._id === id))

    const types = ['Tablet', 'Capsule', 'Syrup', 'Others']

    const handleView=(e)=>{
        if(e.target.id === 'wrapper'){
            setView(!view)
        }
    }

    useEffect(() => {
        getDatas({
            path: 'generic',
            setData: addGenerics,
            setLoading
        })
    }, [])
    
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
                    onSubmit={(e)=>update({
                        e,
                        path : `medicine/${id}`,
                        value,
                        reload,
                        setView,
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
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Generic :</label>
                        <select
                            name="generic"
                            onChange={(e)=>handleChange(e,value,setValue)}
                            className="w-full p-2 border rounded"
                        >
                            <option>Select Generic</option>
                            {
                                generics.map(generic => <option key={generic._id} value={generic._id}>{generic.name}</option>)
                            }
                        </select>
                    </div>
                    <div
                        className="space-y-2"
                    >
                        <label className="text-gray-500 text-base">Type :</label>
                        <select
                            name="type"
                            onChange={(e)=>handleChange(e,value,setValue)}
                            className="w-full p-2 border rounded"
                        >
                            <option>Select Type</option>
                            {
                                types.map(type => <option key={type} value={type}>{type}</option>)
                            }
                        </select>
                    </div>
                    <Input {...{
                        label : 'price',
                        type : 'text',
                        name : 'price',
                        currentValue : value.price,
                        value,setValue
                    }}/>
                    <button
                        className="px-6 py-2 bg-teal-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
            {loading &&
                <Loading {...{msg : 'Medicine updating...'}}/>
            }
        </div>
    );
};

export default UpdateMedicine;