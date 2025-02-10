import { Product } from "../types/common";

export default function ProductRow({ product, handleDelete }: {product: Product, handleDelete: (productId: number) => void}) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
        {product.name}
        </span>;

    return (
        <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        <td> <button onClick={() => handleDelete(product.id)}>Delete Product</button></td>
        </tr>
    );
}