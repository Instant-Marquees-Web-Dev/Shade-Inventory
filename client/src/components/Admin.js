import React from "react";
import {
  Router
} from "@reach/router";
import { Layout, } from "antd";
import Structure from './Structure';
import Dashboard from './Dashboard';
import Navigation from './Navigation';

const { Header, Footer, Content } = Layout;

const Admin = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation/>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <h1>Content Page</h1>
            <Router>
              <Dashboard path="/" />
              <Structure path="structure" />
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Instant Marquees ©{year} Created by Abiral, Anu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
