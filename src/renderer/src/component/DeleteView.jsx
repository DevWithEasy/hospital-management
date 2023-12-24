/* eslint-disable react/prop-types */
import { deleteData } from "../utils/api_crud";
import useUserStore from "../store/userStore";
import {Loading} from "./Index";

const DeleteView = ({path,view,setView}) => {
    const {loading,setLoading,reload} = useUserStore()
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
                    className="p-2 flex justify-between items-center text-xl border-b"
                >
                    <p
                        className="text-red-500 uppercase"
                    >
                        Are you sure ?
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className="px-3 hover:text-red-500 uppercase"
                    >
                        X
                    </button>
                </div>
                <div
                    className="p-4 text-gray-600"
                >
                    Your data will be delete parmanently from the database. You can not back data after delete successfully.
                </div>
                <div
                    className='p-2 flex justify-end items-center space-x-2 border-t'
                >
                    <buttton
                        onClick={()=>setView(!view)}
                        className='px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer'
                    >
                        Cancel
                    </buttton>
                    <buttton
                        onClick={()=>deleteData({
                            path,
                            setLoading,
                            reload,
                            setView
                        })}
                        className='px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                    >
                        Delete
                    </buttton>
                </div>
            </div>
            {loading &&
                <Loading/>
            }
        </div>
    );
};

export default DeleteView;