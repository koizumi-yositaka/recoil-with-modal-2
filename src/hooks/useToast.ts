import { useRecoilState } from "recoil"

import { ToastVisibilityState } from "../states/toast"
import { useCallback } from "react"


export type ToastProps={
    isShow:boolean,
    message:string,
    toastState:
    |"info"
}

type Response = {showToast:(message: string, duration?: number) => void,
    toastState:ToastProps
};



const useToast = ():Response=>{
    const [toastState,setToastState]= useRecoilState(ToastVisibilityState)
    const showToast = useCallback((message:string,duration:number=3000)=>{
        setToastState({...toastState,message})
        setTimeout(() => {
            setToastState({ message: '', isShow: false ,toastState:"info"}); // 一定時間後に非表示
        }, duration);
    },[toastState,setToastState])

    
    return {showToast,toastState}
    // return [toastState,setToastState]
}


export default useToast