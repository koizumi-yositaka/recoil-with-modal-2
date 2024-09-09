
import { UseFormRegisterReturn } from 'react-hook-form'
import { TextArea_Elem, Label_Elem, P_Erro } from './style'





export type InputTextAreaProps={
    label:string,
    register?:UseFormRegisterReturn,
    error?:string
}

export const InputTextArea = (props:InputTextAreaProps) => {
  const { error, register,label, ...rest } = props

  return (
    <>
    <Label_Elem htmlFor="">{label}</Label_Elem>
    <TextArea_Elem {...register} {...rest} />
    <P_Erro>{error}</P_Erro>
    
    </>
  )
}
