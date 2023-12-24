import { useState } from "react";
import { Input, Loading, Toast } from "../component/Index";
import axios from "axios";
import api_url from "../utils/api_url";
import useUserStore from "../store/userStore";
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { addUser, loading, setLoading } = useUserStore()
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const loginHandler = async (e) => {
        e.preventDefault()
        if (!value.email || !value.password) {
            return toast.custom((t) =>
                <Toast {...{
                    t,
                    duration: 2000,
                    type: 'warning',
                    message: 'Please insert email and password'
                }} />
            )
        }
        setLoading(true)
        try {
            const res = await axios.post(`${api_url}/api/auth/signin`, value)
            if (res.data.success) {
                localStorage.setItem('access_token', `Bareer ${res.data.token}`)
                addUser(res.data.data)
                setLoading(false)
                navigate('/')
            }
        } catch (error) {
            setLoading(false)
            return toast.custom((t) =>
                <Toast {...{
                    t,
                    duration: 2000,
                    type: 'erorr',
                    message: 'Something went wrong'
                }} />
            )
        }
    }

    return (
        <div
            className="h-screen flex justify-center items-center bg-teal-50"
        >
            <div
                className="border rounded-md"
            >
                <h2
                    className="p-2 font-semibold text-center text-2xl text-teal-600 border-b uppercase"
                >
                    Feni Medicare Center
                </h2>
                <form
                    onSubmit={(e) => loginHandler(e)}
                    className="p-4 space-y-3"
                >
                    <Input {...{
                        label: 'Email or phone',
                        name: 'email',
                        currentValue: value.email,
                        value, setValue
                    }} />
                    <Input {...{
                        label: 'Password',
                        name: 'password',
                        currentValue: value.password,
                        value, setValue
                    }} />
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white rounded-md p-2"
                    >
                        Login
                    </button>
                </form>
            </div>
            {loading &&
                <Loading {...{msg : 'Logging your account'}}/>
            }
        </div>
    );
};

export default Login;