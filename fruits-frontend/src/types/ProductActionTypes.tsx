import { example } from "yargs";
import Product from "../model/Product";
export const PRODUCTS_LOADING:string="PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCESS:string="PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string="PRODUCZS_LOADING_FAILED";

export interface ProductsAsync{
    loading: boolean;
    products: Product[];
    error: string;

}
export interface ProductsLoading extends ProductsAsync{
    type : typeof PRODUCTS_LOADING;
}

export interface ProductsLoadingSucess extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_SUCESS;
}

export interface ProductsLoadingFail extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_FAIL;
}

export type ProductsActionTypes= ProductsLoading | ProductsLoadingSucess | ProductsLoadingFail;