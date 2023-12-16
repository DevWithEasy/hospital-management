/* eslint-disable react/prop-types */
const AvailableRoom = ({roomRef, view, setView, value, setValue}) => {
    const handleView=(e)=>{
        if(e.target.id === 'wrapper'){
            setView(!view)
            roomRef?.current.blur()
        }
    }

    const handleSelectRoom=(floor,room)=>{
        if(room.status === 'booked'){
            return alert('Already Booked.')
        }else{
            const newValue={
                ...value,
                floor : String(floor).padStart(2,0),
                room : room.room
            }
            setValue(newValue)
            setView(!view)
            roomRef?.current.blur()
        }
    }

    const demos = [
        {
            floor : 1,
            rooms : [
                {
                    room : 101,
                    status : 'booked'
                },
                {
                    room : 102,
                    status : 'free'
                },
                {
                    room : 103,
                    status : 'free'
                },
                {
                    room : 104,
                    status : 'booked'
                },
                {
                    room : 105,
                    status : 'booked'
                },
                {
                    room : 105,
                    status : 'booked'
                }
            ]
        },
        {
            floor : 2,
            rooms : [
                {
                    room : 201,
                    status : 'booked'
                },
                {
                    room : 202,
                    status : 'free'
                },
                {
                    room : 203,
                    status : 'free'
                },
                {
                    room : 204,
                    status : 'booked'
                },
                {
                    room : 205,
                    status : 'booked'
                }
            ]
        },
        {
            floor : 3,
            rooms : [
                {
                    room : 301,
                    status : 'booked'
                },
                {
                    room : 302,
                    status : 'free'
                },
                {
                    room : 303,
                    status : 'free'
                },
                {
                    room : 304,
                    status : 'booked'
                },
                {
                    room : 305,
                    status : 'booked'
                }
            ]
        }
    ]


    return (
        <div
            onClick={handleView}
            id='wrapper'
            className="fixed -top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50 overflow-y-auto"
        >
            <div
                className="w-4/12 p-4 space-y-4 bg-white shadow-xl rounded-md"
            >
                {
                    demos.map((d,i)=><div
                        key={i}
                        className="space-y-2"
                    >
                        <p className="text-xl font-bold border-b-2">Floor : {d?.floor}</p>
                        <div
                            className="flex flex-wrap gap-2"
                        >
                            {
                                d?.rooms.map((r,i)=><button
                                    key={i}
                                    onClick={()=>handleSelectRoom(d?.floor,r)}
                                    className={`px-4 py-2 text-sm ${r?.status === 'booked' ? 'bg-gray-100 hover:bg-red-500 cursor-not-allowed' : 'bg-teal-100 hover:bg-teal-500 '} hover:text-white rounded-md`}
                                >
                                    {r?.room}

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