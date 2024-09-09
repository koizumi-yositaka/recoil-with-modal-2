import { atomFamily } from "recoil"

export type ModalType=
| "inform"
| "error"
| "addProduct"

export const ModalVisibilityState = atomFamily({
    key:"ModalVisibilityState",
    default:false
})


