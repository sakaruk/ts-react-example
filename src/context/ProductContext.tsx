import  { createContext, JSX, useContext } from "react";
import { Product } from "../types/common";
import { PRODUCTS } from "../data/products";

export const ProductContext = createContext<Product[]>([]);

export const ProductProvider = ({children}: {children: JSX.Element}) => {
    return <ProductContext.Provider value={PRODUCTS}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext);
