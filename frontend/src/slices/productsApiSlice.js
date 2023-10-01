import { BASE_URL,PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

console.log(BASE_URL ,PRODUCT_URL)

export const productsApiSlice = apiSlice.injectEndpoints({

    
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query: ()=> ({
                url: PRODUCT_URL,
            }),
            keepUnusedDataFor: 5
        })
    })
}) 

export const {useGetProductsQuery} = productsApiSlice;