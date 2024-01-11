import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const createUserStore = (set)=>({
    isAuth : false,
    user : {},
    users : [],
    random : 0,
    loading : false,
    floors : [],
    rooms : [],
    floorRooms : [],
    doctors : [],
    medicines : [],
    generics : [],

    addUser : (data)=>{
        set(()=>({
            isAuth : true,
            user : data
        }))
    },
    removeUser : ()=>{
        set(()=>({
            isAuth : false,
            user : {}
        }))
    },
    addUsers : (users)=>{
        set(()=>({
            users : users
        }))
    },
    setLoading : (status)=>{
        set(()=>({
            loading : status
        }))
    },
    reload : ()=>{
        set(()=>({
            random : Math.random()
        }))
    },
    addfloors : (floors)=>{
        set(()=>({
            floors : floors
        }))
    },
    addRooms : (rooms)=>{
        set(()=>({
            rooms : rooms
        }))
    },
    addFloorRooms : (data)=>{
        set(()=>({
            floorRooms : data
        }))
    },
    addDoctors : (data)=>{
        set(()=>({
            doctors : data
        }))
    },
    addMedicines : (data)=>{
        set(()=>({
            medicines : data
        }))
    },
    addGenerics : (data)=>{
        set(()=>({
            generics : data
        }))
    },
})
const useUserStore =create(
    devtools(
        persist(createUserStore,{
            name : "user"
        })
    )
)
export default useUserStore;