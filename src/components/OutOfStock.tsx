import { useProducts } from "../context/ProductContext";

export default function OutOfStock() {
    const products = useProducts();
    const outOfStockProducts = products.filter(product => !product.stocked);

    return (
        <ul>
            {outOfStockProducts.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>  
    )
}