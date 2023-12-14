import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const createUserStore = (set)=>({
    isAuth : false,
    user : {},
    users : [],

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