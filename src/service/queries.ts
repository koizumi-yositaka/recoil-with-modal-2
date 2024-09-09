import { useQueries, useQuery } from '@tanstack/react-query'
import { getProductIds, getProductById} from './api'

export const useProductIds = () => {
    return useQuery({
        queryKey:["products"],
        queryFn:getProductIds
    })
}


export const useProducts = (ids:( number| undefined)[]| undefined)=>{
    return useQueries(
        {
            queries:(ids??[]).map(id => {
                return {
                    queryKey:["products",{id}],
                    queryFn:()=>getProductById(id!),
                }
            })

            
            
        }
    )
}