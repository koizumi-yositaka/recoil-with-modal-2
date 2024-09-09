import { SetterOrUpdater, useRecoilState } from "recoil";
import { ModalType, ModalVisibilityState } from "../states/modal";
type Response =[boolean,SetterOrUpdater<boolean>]

const useModal = (modalType:ModalType):Response=>{
    const [isVisible,setIsVisible]= useRecoilState(ModalVisibilityState(modalType))
    return [isVisible,setIsVisible]
}

export default useModal