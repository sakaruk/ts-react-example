import  { ActionDispatch, createContext, JSX, useContext, useReducer } from "react";
import { Product } from "../types/common";
import { PRODUCTS } from "../data/products";

export const ProductContext = createContext<{
    products: Product[], 
    dispatch: ActionDispatch<[action: {type: ReducerActions, payload: Product}]>}>
    ({products: [], dispatch: () => {}});

export enum ReducerActions {
    DELETE = 'DELETE',
    ADD = 'ADD',
    EDIT = 'EDIT'
}
const productReducer = (state: Product[], action: {type: ReducerActions, payload: Product }): Product[] => {
    const {type, payload} = action;
    switch(type) {
        case ReducerActions.DELETE:
            return state.filter(product => product.id !== payload.id);
        case ReducerActions.ADD:
            return [...state, payload];
        case ReducerActions.EDIT:
            return state.map(product => product.id === payload.id ? payload : product);
        default:
            return state;
    }
}
export const ProductProvider = ({children}: {children: JSX.Element}) => {
    const [products, dispatch] = useReducer(productReducer, PRODUCTS);

    return <ProductContext.Provider value={{products, dispatch}}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext);
