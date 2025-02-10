import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <div>
        <SearchBar filterText={filterText} 
    inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
    onInStockOnlyChange={setInStockOnly} />
        <ProductTable filterText={filterText}
    inStockOnly={inStockOnly} />
        </div>
    );
}