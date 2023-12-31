import {useNavigate} from 'react-router-dom'
/* eslint-disable react/prop-types */
const SearchPatient = ({patients, view, setView}) => {
    const navigate = useNavigate()
    const handleView=(e)=>{
        if(e.target.id === 'wrapper'){
            setView(!view)
        }
    }

    const handleNavigate=(p)=>{
        navigate(`/patient/${p.username}`)
        setView(!view)
    }

    return (
        <div
            onClick={handleView}
            id='wrapper'
            className="fixed -top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50 overflow-y-auto"
        >
            <div
                className="w-4/12 p-4 space-y-4 bg-white shadow-xl rounded-md"
            >
                {patients &&
                    patients.slice(0,5).map(p=><div
                        key={p.id}
                        onClick={()=>handleNavigate(p)}
                        className="p-2 border rounded-md cursor-pointer"
                    >
                        <p>{p.name}</p>
                        <p className='text-sm text-gray-400'>{p.address.street}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SearchPatient;