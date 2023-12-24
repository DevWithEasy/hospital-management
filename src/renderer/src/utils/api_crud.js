import axios from "axios"
import toast from 'react-hot-toast'
import api_url from "./api_url"

export const create = async (data) => {
    const { e, path, value, setView, reload } = data
    e.preventDefault()
    if (path == 'floor' && !value.floorNo) {
        return toast.error('Please inset floor no.')
    }
    try {
        const res = await axios.post(`${api_url}/api/${path}`, value, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            reload()
            if (setView) {
                setView(false)
            }
        }

    } catch (error) {
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
    }
}

export const getDatas=async(data)=>{
    const {path,setData} = data
    try {
        const res = await axios.get(`${api_url}/api/${path}`, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
    }
}