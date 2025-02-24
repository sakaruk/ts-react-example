import { Link, Outlet } from "react-router";
import {
  FileAddFilled,
  HomeFilled,
  StockOutlined,
} from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
const {  Sider, Content } = Layout;

export default function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="full-h">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Menu className="pt" theme="dark" mode="inline" defaultSelectedKeys={['/']} items={[
          {
            key: '/',
            icon: <HomeFilled />,
            label: <Link to="/">Home</Link>,
          },
          {
            key: 'out-of-stock',
            icon: <StockOutlined />,
            label: <Link to="out-of-stock">Out of stock</Link>,
          },
          {
            key: 'add',
            icon: <FileAddFilled />,
            label: <Link to="add">Add Product</Link>,
          },
        ]} />
      </Sider>
      <Layout>
        
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}