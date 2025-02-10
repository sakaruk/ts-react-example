import { Fragment, useState } from "react";
import { Product } from "../types/common";
import { CATEGORIES, PRODUCTS } from "../data/products";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface ProductTableProps {
    filterText: string;
    inStockOnly: boolean;
}

export default function ProductTable({ filterText, inStockOnly }: ProductTableProps) {
    const [products, setProducts] = useState<Product[]>(PRODUCTS); // Set products from initial production in data
    const displayProducts = products.filter((product) => {
      if(filterText.length > 0 && !product.name.toLowerCase().startsWith(filterText)) return false
      if(inStockOnly && !product.stocked) return false
      

      return true
    })

    const handleDelete = (productId: number) => {
      // Call api to delete 
      // Response success 
      setProducts(products.filter(product => product.id !== productId))
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