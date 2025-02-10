import { Category, Product } from "../types/common";

export const PRODUCTS: Product[] = [
  {id: 1, category_id: 1, price: "$1", stocked: true, name: "Apple"},
  {id: 2, category_id: 1, price: "$1", stocked: true, name: "Dragonfruit"},
  {id: 3, category_id: 1, price: "$2", stocked: false, name: "Passionfruit"},
  {id: 4, category_id: 2, price: "$2", stocked: true, name: "Spinach"},
  {id: 5, category_id: 2, price: "$4", stocked: false, name: "Pumpkin"},
  {id: 6, category_id: 2, price: "$1", stocked: true, name: "Peas"}
];

export const CATEGORIES: Category[] = [
  {id: 1, name: "Fruits"},
  {id: 2, name: "Vegetables"}
]