import React from "react";
import { Layout } from "antd";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <SideNav />
      <Layout>
        <TopNav />
        <div className="bg-black text-white">
          <h1 className="text-gray-100">test</h1>
        </div>
      </Layout>
    </Layout>
  );
};

export default App;
