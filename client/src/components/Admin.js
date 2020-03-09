import React from "react";
import {
  Router
} from "@reach/router";
import { Layout, } from "antd";
import Dashboard from './Dashboard';
import Navigation from './Navigation';
import ActiveJobs from "./ActiveJobs";
import AddStructure from "./AddStructure";
import Inventory from './Inventory';

const { Footer, Content } = Layout;

const Admin = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation/>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Router>
              <Dashboard path="/dashboard" />
              <ActiveJobs path="/activeJobs"/>
              <AddStructure path="/addStructure"/>
              <Inventory path="/inventory"/>
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
