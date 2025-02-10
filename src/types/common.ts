import { Dispatch, SetStateAction } from "react";

export interface Product {
    id: number;
    category_id: number;
    price: string;
    stocked: boolean;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: Dispatch<SetStateAction<string>>;
    onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
}