import { useState } from "react";
import handleChange from "../utils/handleChange";
import { FaRegEyeSlash,FaEye } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Input_Password = ({ label,name, currentValue, value, setValue }) => {
    const [type,setType] = useState('password')
    const handleType=()=>{
        if(type === 'password'){
            return setType('text')
        }else{
            return setType('password')
        }
    }
    return (
        <div
            className="space-y-2"
        >
            <label className="text-gray-500 text-base">{label} :</label>
            <div
                className="relative"
            >
                <input
                    type={type}
                    name={name}
                    value={currentValue}
                    onChange={(e) => handleChange(e, value, setValue)}
                    className="w-full p-2 border placeholder:text-sm rounded"
                />
                <button
                    onClick={handleType}
                    className="absolute top-0 right-0 px-3 py-2 text-gray-400 cursor-pointer"
                >
                    {type === 'password' ?
                        <FaRegEyeSlash size={25}/> : <FaEye size={25}/>
                    }
                </button>
            </div>
        </div>
    );
};

export default Input_Password;