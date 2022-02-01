import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Home, Signup }  from './components/pages'
import "./sass/App.scss";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

function App() {
  return (
  <Router>
  <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys='1'>
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/signup'>Signup</Link></Menu.Item>
        <Menu.Item key="3">Login</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <div className="site-layout-content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </div>
    </Content>
  </Layout>
  </Router>
  );
}

export default App;
