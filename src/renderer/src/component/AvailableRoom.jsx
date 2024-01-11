/* eslint-disable react/prop-types */
import toast from 'react-hot-toast'
import {Toast} from './Index';

const AvailableRoom = ({roomRef, data, view, setView, value, setValue}) => {
    const handleView=(e)=>{
        if(e.target.id === 'wrapper'){
            setView(!view)
            roomRef?.current.blur()
        }
    }

    const handleSelectRoom=(floor,room)=>{
        if(room.isAvailable){
            toast.custom((t)=><Toast {...{
                t,
                type : 'error',
                message : 'This room aleady booked.Please select another.'
            }}/>)
        }else{
            const newValue={
                ...value,
                floor,
                room
            }
            setValue(newValue)
            setView(!view)
            roomRef?.current.blur()
        }
    }


    return (
        <div
            onClick={handleView}
            id='wrapper'
            className="fixed -top-2 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50 overflow-y-auto"
        >
            <div
                className="w-11/12 md:w-6/12 lg:w-5/12 p-4 space-y-2 bg-white rounded-md shadow-xl"
            >
                {
                    data.map((floor)=><div
                        key={floor._id}
                        className="space-y-2"
                    >
                        <p className="text-lg font-semibold border-b-2">{floor?.name} : {floor?.no}</p>
                        <div
                            className="flex flex-wrap gap-2"
                        >
                            {
                                floor?.rooms.map((room)=><button
                                    key={room._id}
                                    onClick={()=>handleSelectRoom(floor?._id,room._id)}
                                    className={`px-4 py-2 text-sm ${!room?.isAvailable ? 'bg-gray-100 hover:bg-red-500 cursor-not-allowed' : 'bg-teal-100 hover:bg-teal-500 '} hover:text-white rounded-md`}
                                >
                                    {room?.no}

                                </button>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableRoom;