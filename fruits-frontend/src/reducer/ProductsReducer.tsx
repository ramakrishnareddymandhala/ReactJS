import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCESS } from "../types/ProductActionTypes";
import Product from "../model/Product";
import { act } from "react-dom/test-utils";
export interface IState{
    loading : boolean;
    products : Product[];
    error : string;

}
const intitialState : IState = {
    loading : false,
    products : [],
    error : ""
}
const productReducer =  (state = intitialState,action: ProductsActionTypes) :IState =>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCESS:
        case PRODUCTS_LOADING_FAIL:
            return {
                ...state,
                loading : action.loading,
                products : action.products,
                error : action.error
            }
        default :
            return state;
    }
}

export default productReducer;