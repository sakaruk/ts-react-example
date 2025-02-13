import { BrowserRouter, Routes, Route } from "react-router";

import FilterableProductTable from "./components/FilterableProductTable";
import Dashboard from "./components/layout/Dashboard";
import OutOfStock from "./components/OutOfStock";
import { ProductProvider } from "./context/ProductContext";
import AddProduct from "./components/AddProduct";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />}>
            <Route  path="/"  element={<FilterableProductTable />} />
            <Route path="out-of-stock" element={<OutOfStock />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}