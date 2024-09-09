import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Product } from "../types/product"
import { createProduct } from "./api"

export const useCreateProduct = () =>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(data:Product) => createProduct(data),
        onError:(_,error)=>{
            console.error(error)
        },
        onSettled:async(_,error)=>{
            console.log("mutate create settle")
            if(error){
                console.log("error",error)
            }else{
                await queryClient.invalidateQueries({queryKey:["products"]})
            }
        }


    })

}