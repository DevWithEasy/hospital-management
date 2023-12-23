import { Heading, Input } from "../component/Index";
import useUserStore from "../store/userStore";
import image from '../assets/demo-user.png'
import { FaRegUser } from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const Settings = () => {
    const { user } = useUserStore()
    const [state,setState] = useState(1)
    const {value,setValue} = useState(user)
    return (
        <div
            className="space-y-2"
        >
            <Heading>Settings</Heading>
            <div
                className="flex space-x-4"
            >
                <div
                    className="w-4/12 h-[350px] p-4 flex flex-col items-center space-y-2 bg-white rounded-md"
                >
                    <img
                        src={user?.image ? user.image : image}
                        className="w-[150px] h-[150px] rounded-full border border-dashed"
                    />
                    <div
                        className="text-center"
                    >
                        <p
                            className="font-semibold"
                        >
                            Robiul Awal
                        </p>
                        <p
                            className="text-gray-400"
                        >
                            robiulawal68@mail.com
                        </p>
                        <p
                            className="text-sm"
                        >
                            +8801717642515
                        </p>
                    </div>
                    <div
                        className="space-y-2"
                    >
                        <button
                            onClick={()=>setState(1)}
                            className={`w-full p-2 flex items-center space-x-3 ${state===1 ? 'bg-teal-50 text-teal-500' : 'bg-gray-50'} rounded-md`}
                        >
                            <FaRegUser />
                            <span>Persional information</span>
                        </button>
                        <button
                            onClick={()=>setState(2)}
                            className={`w-full p-2 flex items-center space-x-3 ${state===2 ? 'bg-teal-50 text-teal-500' : 'bg-gray-50'} rounded-md`}
                        >
                            <CiUnlock />
                            <span>Change password</span>
                        </button>
                    </div>
                </div>
                <div
                    className="w-8/12 p-4 bg-white rounded-md"
                >
                    {state === 1 ?
                        <div
                            className="space-y-2"
                        >
                            <div
                                className="flex justify-between space-x-2"
                            >
                                <label
                                    htmlFor="image"
                                    className="w-full p-4 flex flex-col items-center border border-dashed rounded-md"
                                >
                                    <IoCloudUploadOutline/>
                                    <p
                                        className="font-semibold"
                                    >
                                        Upload your image here
                                    </p>
                                    <p
                                        className="text-gray-300 italic"
                                    >
                                        Only upload jpg,jpeg and png image will be accepted.
                                    </p>
                                </label>
                                <input 
                                    id="image"
                                    type="file"
                                    onChange={(e)=>{}}
                                    className="hidden"
                                />
                                <div
                                    className="w-32 flex justify-center items-center bg-gray-100 rounded-md"
                                >
                                    <span>300x300</span>
                                </div>
                            </div>
                            <Input {...{
                                label: 'Name',
                                name : 'name',
                                currentValue : value?.name,
                                value,setValue
                            }}/>
                            <Input {...{
                                label: 'Email',
                                name : 'email',
                                currentValue : value?.email,
                                value,setValue
                            }}/>
                            <Input {...{
                                label: 'Phone',
                                name : 'phone',
                                currentValue : value?.phone,
                                value,setValue
                            }}/>
                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Settings;