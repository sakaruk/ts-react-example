import { Checkbox, Col, Input, Row } from "antd";
import { SearchBarProps } from "../types/common";



export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: SearchBarProps) {
    return (
      <form>
        <Row gutter={16} align="middle">
          <Col flex={1}>
            <Input  type="text" 
              value={filterText} 
              placeholder="Search..."
              onChange={(e) => onFilterTextChange(e.target.value)} />
          </Col>
          <Col flex={1}>
            <Checkbox checked={inStockOnly} 
              onChange={(e) => onInStockOnlyChange(e.target.checked)} >
                Only show products in stock
            </Checkbox>
          </Col>
        </Row>
      </form>
    );
  }