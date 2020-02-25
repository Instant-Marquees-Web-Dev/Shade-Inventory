import React, {useState} from 'react'
import {
    Link
} from "@reach/router";
import {
    Layout,
    Menu,
    Icon
} from "antd";

const {
    Sider
} = Layout;

const Navigation = () => {
    // const [collapsed, setCollapsed] = useState(false);

    // const onCollapse = () => {
    //     setCollapsed(!collapsed)
    // };

    return (
        <Sider  collapsible breakpoint="md" collapsedWidth="0" >
        <div className="flex py-4 mt-4 justify-center text-lg">
            <h1 className="text-gray-200">INSTANT MARQUEES</h1>
        </div>
        <div>
            <nav>
                <Menu theme="dark"  defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="appstore" />
                        <span>Dashboard</span>
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="structure">
                        <Icon type="bank" />
                        <span>Structure</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </nav>
        </div>
        </Sider>
    )
}

export default Navigation
