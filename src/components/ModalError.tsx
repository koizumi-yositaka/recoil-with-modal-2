import React from 'react'
import useModal from '../hooks/useModal'
import DemoModal from './common/DemoModal'

export const ModalError = () => {
    const [isVisible,setIsvisible] =useModal("error")
  return (
    <div>
    {
        isVisible&&
        <DemoModal closeModal={() => setIsvisible(false)} headerTitle='ERROR' >
            error
        </DemoModal>
    }
    </div>
  )
}
