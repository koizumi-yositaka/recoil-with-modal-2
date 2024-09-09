import React from 'react'
import useModal from '../hooks/useModal'
import DemoModal from './common/DemoModal'
import { Button } from './common/Button'

export const ModalInform = () => {

    const [isVisible,setisVisible] = useModal("inform")
    const [,setisErrorVisible] = useModal("error")
  return (
    isVisible && 
    <DemoModal closeModal={() => {console.log("parent");setisVisible(false)}} headerTitle='INFO' >
        INFO
        <Button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{e .stopPropagation();setisErrorVisible(true)}}>ERROR</Button>
    </DemoModal>
  )
}
