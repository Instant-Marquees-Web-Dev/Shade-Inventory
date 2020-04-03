import React, { useContext } from "react";
import {
  Router
} from "@reach/router";
import { Layout, } from "antd";
import Navigation from './Navigation';
import ActiveJobs from "./ActiveJobs";
import AddStructure from "./AddStructure";
import Inventory from './Inventory';
import StructureContext from '../context/StructureContext'
import TeamLeader from "./TeamLeader";

const { Footer, Content } = Layout;

const Admin = () => {
  const date = new Date();
  const year = date.getFullYear();
  const value = useContext(StructureContext)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation/>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <StructureContext.Provider value={value}>
            <Router>
              {/* <Dashboard path="/dashboard" /> */}
                <ActiveJobs path="/activeJobs"/>
                <AddStructure path="/addStructure"/>
                <Inventory path="/inventory"/>
                <TeamLeader path="/teamLeader"/>
            </Router>
              </StructureContext.Provider>
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
