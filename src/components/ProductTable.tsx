import { Fragment } from "react";
import { CATEGORIES } from "../data/products";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { ReducerActions, useProducts } from "../context/ProductContext";

interface ProductTableProps {
    filterText: string;
    inStockOnly: boolean;
}

export default function ProductTable({ filterText, inStockOnly }: ProductTableProps) {
    const {products, dispatch} = useProducts();
    const displayProducts = products.filter((product) => {
      if(filterText.length > 0 && !product.name.toLowerCase().startsWith(filterText)) return false
      if(inStockOnly && !product.stocked) return false
      

      return true
    })

    const handleDelete = (productId: number) => {
      const deleteProduct = products.find(product=> product.id === productId)
      if(deleteProduct){
        dispatch({type: ReducerActions.DELETE, payload: deleteProduct})
      }
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
          CATEGORIES.map((category)=>(
            <Fragment key={category.id}>
              <ProductCategoryRow category={category.name} />
              {
                displayProducts.filter(product=>product.category_id === category.id).map((product)=>(
                  <ProductRow key={product.id} product={product} handleDelete={handleDelete} />
                ))
              }
            </Fragment>
          ))
          }</tbody>
      </table>
    );
  }