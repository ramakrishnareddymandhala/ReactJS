import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCESS } from "../types/ProductActionTypes";
const getProducts= () => {
    return (dispatch : Dispatch<ProductsActionTypes>) =>{
        dispatch({
            type: PRODUCTS_LOADING,
            loading : false,
            products : [],
            error : ""

        })
        try{
           const res =  await axios.get("http://localhost:8080/products");
           const {data} = res;
           dispatch({
               type : PRODUCTS_LOADING_SUCESS,
               loading : true,
               products : data,
               error : ""
           })
        } catch(err){
            dispatch({
                type: PRODUCTS_LOADING_FAIL,
                loading : true,
                products : [],
                error : err.message
            })
        }
    }
};
export default getProducts;