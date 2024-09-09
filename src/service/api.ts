import axios from "axios";
import { Product } from "../types/product";
const BASE_URL="http://localhost:4040/"
const axiosInstance = axios.create({baseURL:BASE_URL})


export const getProductIds = async()=>{
    return (await axiosInstance.get<Product[]>("products")).data.map(product => product.id)
}

export const getProductById =async (id:number) => {
    return (await axiosInstance.get<Product>(`products/${id}`)).data
}

export const createProduct = async(data:Product) => {
    return (await axiosInstance.post<Product>("products",data)).data

 }
