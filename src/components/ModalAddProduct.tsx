import DemoModal from './common/DemoModal'
import useModal from '../hooks/useModal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Product } from '../types/product'
import { useCreateProduct } from '../service/mutations'
import React from 'react'
import { InputText } from './common/InputText'
import { InputNumber } from './common/InputNumber'

import { zodResolver } from '@hookform/resolvers/zod'
import { validationSchema } from '../utils/validationSchema'
import useToast from '../hooks/useToast'
import { InputTextArea } from './common/InputTextArea'
import { Button } from './common/Button'



const AddProduct = () =>{
  const [,setIsvisible] =useModal("addProduct")
  const {showToast} =useToast()
  const {register,handleSubmit,formState:{errors}} = useForm<Product>({mode:"onChange",resolver:zodResolver(validationSchema)})
  const createProductMutation= useCreateProduct()


  const handleCreateProductMutation:SubmitHandler<Product>=(data)=>{
    createProductMutation.mutate(data)
    setIsvisible(false)
    showToast("追加しました")
  }

  return (
    <form onSubmit={handleSubmit(handleCreateProductMutation)}>

            <div>
                
                <InputText label={"商品名"} error={errors.name ?errors.name.message:""} register={register("name",{required:"必須た"})}/>
                
            </div>
            <div>
                <InputNumber label={"価格"} error={errors.price ?errors.price.message:""} register={register("price",{required:true})}/>

            </div>

            <div>
               <InputTextArea label={"説明"} error={errors.description ?errors.description.message:""} register={register("description",{required:true})}/>
              
            </div>
            <div>
               <InputNumber label={"商品個数"} error={errors.quantity ?errors.quantity.message:""} register={register("quantity",{required:true})}/>
            </div>
            <Button type="submit" disabled={createProductMutation.isPending}>{createProductMutation.isPending?"登録中...":"登録"}</Button>
    
    </form>
  )
}




export const ModalAddProduct:React.FC= () => {

  const [isVisible,setIsvisible] =useModal("addProduct")
  return (
    <div>
    {
        isVisible&&
        <DemoModal closeModal={() => setIsvisible(false)} headerTitle='商品登録' >
            <AddProduct/>
        </DemoModal>
    }
    </div>
  )

  
}
