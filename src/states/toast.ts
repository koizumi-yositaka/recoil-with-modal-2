import { atom, selector } from "recoil";
import { ToastProps } from "../hooks/useToast";

export const ToastVisibilityState = atom<ToastProps>({
    key:"ToastVisibile",
    default:{
        isShow:false,
        message:"",
        toastState:"info"
    }
})

export const IsShowToast= selector<boolean> ({
    key:"isShowToast",
    get:({get})=>{
        return get(ToastVisibilityState).isShow
    }
})