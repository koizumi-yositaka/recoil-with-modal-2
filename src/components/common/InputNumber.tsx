import { UseFormRegisterReturn } from "react-hook-form"

import { Input_text, Label_Elem, P_Erro } from './style'

export type InputNumProps={
    label:string,
    register?:UseFormRegisterReturn,
    error?:string
}
export const InputNumber = (props:InputNumProps) => {
  const { error, register,label, ...rest } = props

  return (
    <>
    <Label_Elem htmlFor="">{label}</Label_Elem>
    <Input_text type="number" {...register}  {...rest} />
    <P_Erro>{error}</P_Erro>
    
    </>
  )
}