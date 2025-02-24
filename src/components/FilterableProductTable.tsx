import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { Flex } from "antd";

export default function FilterableProductTable() {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <Flex gap="20px" vertical>
        <SearchBar filterText={filterText} 
    inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
    onInStockOnlyChange={setInStockOnly} />
        <ProductTable filterText={filterText}
    inStockOnly={inStockOnly} />
        </Flex>
    );
}