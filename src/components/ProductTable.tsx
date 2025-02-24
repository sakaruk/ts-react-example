import { CATEGORIES } from "../data/products";
import { ReducerActions, useProducts } from "../context/ProductContext";
import { Button, Table, TableProps, Tooltip, Typography } from "antd";
import { Category, Product } from "../types/common";
import { DeleteFilled } from "@ant-design/icons";

const { Text } = Typography;

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

    const categoryColumns: TableProps<Category>['columns'] = [
      { title: 'Categories', key: 'name', render: (record: Category) => (
        <Text strong>{record.name}</Text>
      ) }
    ];

    const productColumns: TableProps<Product>['columns'] = [
      { title: 'Name', key: 'name' , render: (record: Product) => (
        <Text type={!record.stocked ? 'danger' : 'success'} >
           {record.name}
        </Text>
      ) },
      { title: 'Price', dataIndex: 'price', key: 'price' },
      { title: 'Action', key: 'action', render: (record: Product) => (
        <Tooltip title="Delete">
           <Button danger title="Delete" onClick={()=>handleDelete(record.id)}><DeleteFilled /></Button>
        </Tooltip>
      ) }
    ]

    const expandedRowRender = (record: Category) => (
      <Table<Product>
        rowKey="id"
        columns={productColumns}
        dataSource={displayProducts.filter((product)=> product.category_id === record.id)}
        pagination={false}
      />
    );

    return (
      <Table<Category>
        columns={categoryColumns}
        rowKey="id"
        expandable={{ expandedRowRender, defaultExpandedRowKeys: CATEGORIES.map(category=> category.id) }}
        dataSource={CATEGORIES}
        pagination={false}
      />
    );
  }