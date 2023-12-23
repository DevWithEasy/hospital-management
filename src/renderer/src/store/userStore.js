import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const createUserStore = (set)=>({
    isAuth : false,
    user : {},
    users : [],
    random : 0,

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
    reload : ()=>{
        set(()=>({
            random : Math.random()
        }))
    }
})
const useUserStore =create(
    devtools(
        persist(createUserStore,{
            name : "user"
        })
    )
)
export default useUserStore;