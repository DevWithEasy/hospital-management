import { Heading, Input } from "../component/Index";
import useUserStore from "../store/userStore";
import image from '../assets/demo-user.png'
import { FaRegUser } from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { LiaSave } from "react-icons/lia";
import { Input_Password } from "./Index";

const Settings = () => {
    const { user } = useUserStore()
    const [state, setState] = useState(1)
    const [value, setValue] = useState(user)
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const handleImage=()=>{

    }

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
                            className="text-sm text-gray-400"
                        >
                            robiulawal68@mail.com
                        </p>
                        <p
                            className="text-sm text-gray-600"
                        >
                            +8801717642515
                        </p>
                    </div>
                    <div
                        className="space-y-2"
                    >
                        <button
                            onClick={() => setState(1)}
                            className={`w-full p-2 flex items-center space-x-3 ${state === 1 ? 'bg-teal-50 text-teal-500' : 'bg-gray-50'} rounded-md`}
                        >
                            <FaRegUser />
                            <span>Persional information</span>
                        </button>
                        <button
                            onClick={() => setState(2)}
                            className={`w-full p-2 flex items-center space-x-3 ${state === 2 ? 'bg-teal-50 text-teal-500' : 'bg-gray-50'} rounded-md`}
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
                                    className="w-full p-4 flex flex-col items-center border border-dashed rounded-md cursor-pointer"
                                >
                                    <IoCloudUploadOutline />
                                    <p
                                        className="font-semibold"
                                    >
                                        Upload your image here
                                    </p>
                                    <p
                                        className="text-xs text-gray-400 italic"
                                    >
                                        Only upload jpg,jpeg and png image will be accepted.
                                    </p>
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    onChange={(e) => handleImage(e.target.files[0])}
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
                                name: 'name',
                                currentValue: value?.name,
                                value, setValue
                            }} />
                            <Input {...{
                                label: 'Email',
                                name: 'email',
                                currentValue: value?.email,
                                value, setValue
                            }} />
                            <Input {...{
                                label: 'Phone',
                                name: 'phone',
                                currentValue: value?.phone,
                                value, setValue
                            }} />
                            <div
                                className="flex items-center space-x-4 py-2"
                            >
                                <button
                                    onClick={() => setState(2)}
                                    className="w-full p-2 flex justify-center items-center space-x-3 bg-gray-400 hover:bg-red-500 text-white rounded-md transition-all duration-300"
                                >
                                    <MdDeleteOutline size={20} />
                                    <span>Delete account</span>
                                </button>
                                <button
                                    onClick={() => setState(2)}
                                    className="w-full p-2 flex justify-center items-center space-x-3 bg-teal-400 hover:bg-teal-500 text-white rounded-md transition-all duration-300"
                                >
                                    <LiaSave size={20} />
                                    <span>Save chnages</span>
                                </button>
                            </div>
                        </div>
                        :
                        <div
                            className="space-y-2"
                        >
                            <h2
                                className="py-2 text-xl font-semibold border-b"
                            >
                                Change password
                            </h2>

                            <Input {...{
                                label: 'Old password',
                                name: 'oldPassword',
                                currentValue: passwords?.oldPassword,
                                value: passwords,
                                setValue: setPasswords
                            }} />

                            <Input_Password {...{
                                label: 'New password',
                                name: 'newPassword',
                                currentValue: passwords?.newPassword,
                                value: passwords,
                                setValue: setPasswords
                            }} />

                            <Input_Password {...{
                                label: 'Confirm password',
                                name: 'confirmPassword',
                                currentValue: passwords?.confirmPassword,
                                value: passwords,
                                setValue: setPasswords
                            }} />

                            <button
                                className="px-4 py-2 bg-teal-500 text-white rounded-md"
                            >
                                Save Change
                            </button>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Settings;