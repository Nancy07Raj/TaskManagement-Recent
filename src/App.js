import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./sass/App.scss";

const { Header, Content, Footer } = Layout;

function App() {
  return (
  <div>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">SignUp</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
     <div className="site-layout-content">
     Content
     <h1>Hello</h1>
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
     Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  </div>
  );
}

export default App;
