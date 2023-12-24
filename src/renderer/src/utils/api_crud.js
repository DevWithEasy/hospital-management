import axios from "axios"
import toast from 'react-hot-toast'
import api_url from "./api_url"

//create data utils
export const create = async (data) => {
    const { e, path, value, setView, reload,setLoading } = data
    e.preventDefault()
    if (path == 'floor' && !value.name && !value.no) {
        return toast.error('Please inset floor Name and No.')
    }
    setLoading(true)
    try {
        const res = await axios.post(`${api_url}/api/${path}`, value, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            reload()
            setLoading(false)
            if (setView) {
                setView(false)
            }
        }

    } catch (error) {
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
        setLoading(false)
    }
}

//get all data utils
export const getDatas=async(data)=>{
    const {path,setData,setLoading} = data
    setLoading(true)
    try {
        const res = await axios.get(`${api_url}/api/${path}`, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            setData(res.data.data)
            setLoading(false)
        }
    } catch (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
    }
}

//update data utils
export const update = async (data) => {
    const { e, path, value, reload,setView, setLoading } = data
    e.preventDefault()
    if (path == `floor/${value._id}` && !value.name && !value.no) {
        return toast.error('Please inset floor Name and No.')
    }
    setLoading(true)
    try {
        const res = await axios.put(`${api_url}/api/${path}`, value, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            reload()
            setLoading(false)
            if (setView) {
                setView(false)
            }
        }

    } catch (error) {
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
        setLoading(false)
    }
}

//delete data utils
export const deleteData = async (data) => {
    const { path, setView, reload,setLoading } = data
    setLoading(true)
    try {
        const res = await axios.delete(`${api_url}/api/${path}`, {
            headers: {
                'authorization': localStorage.getItem('access_token')
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            reload()
            setLoading(false)
            if (setView) {
                setView(false)
            }
        }

    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message ? error.response.data.message : 'Something went wrong.')
        setLoading(false)
    }
}