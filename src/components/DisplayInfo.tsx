import useModal from '../hooks/useModal'
import { ModalInform } from './ModalInform'
import { Button } from './common/Button'
import { ModalError } from './ModalError'
import { ProductsList } from './ProductsList'
import { ModalAddProduct } from './ModalAddProduct'
import { DemoToast } from './common/DemoToast'

import useToast from '../hooks/useToast'

export const  DisplayInfo = () => {
  
    const [,setIsVisibleAddProduct] = useModal("addProduct")

    const {toastState}=useToast()
    //if(isFetching) return <div>読み込み中</div>
  return (
    <div>
        
        <Button onClick={() =>{setIsVisibleAddProduct(true)}}>商品の追加</Button>
        <ProductsList/>
        {/* {inf?"O":"N"}{er?"Q":"A"} */}
        <ModalInform/>
        <ModalError/>
        <ModalAddProduct/>
        {toastState.isShow && <DemoToast/>}
    </div>
  )
}
