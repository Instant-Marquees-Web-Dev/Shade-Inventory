import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="flex py-4 mb-4 justify-center">
          <h1 className="text-gray-200">INSTANT MARQUEES</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="appstore" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>Option 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <h1>Content Page</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Instant Marquees ©{year} Created by Abiral, Anu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
