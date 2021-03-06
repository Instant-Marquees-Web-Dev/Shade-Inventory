import React, {useState} from 'react'
import {
    Link
} from "@reach/router";
import {
    Layout,
    Menu,
} from "antd";

import { BankTwoTone, FileTextOutlined, UserAddOutlined } from '@ant-design/icons';

const {
    Sider
} = Layout;

const { SubMenu } = Menu

const Navigation = () => {
    const [currentKey] = useState('structure')

    return (
        <Sider  collapsible breakpoint="md" collapsedWidth="0" >
        <div className="flex py-4 mt-4 justify-center text-lg">
            <h1 className="text-gray-200">INSTANT MARQUEES</h1>
        </div>
        <div>
            <nav>
                <Menu 
                theme="dark" 
                defaultSelectedKeys={currentKey} 
                defaultOpenKeys={['structure']}
                mode="inline">
                    <SubMenu 
                    key="structure"
                    title=
                    {
                        <span>
                        <BankTwoTone twoToneColor="#eee" style={{fontSize:'14px', position:'relative', top: '-4px', left:'4px'}}/>
                        <span>Structure</span>
                        </span>
                    }>
                        <Menu.Item key="activeJobs">
                        <Link to="/">
                            Active Jobs
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="addStructure">
                        <Link to="/addStructure">
                            Add Structure
                        </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item
                    key="inventory"
                    >
                    <Link to="/inventory">
                        <FileTextOutlined twoToneColor="#eee" style={{fontSize:'14px', position:'relative', top: '-4px', left:'4px'}}/>
                        <span className="text-gray-200">Inventory</span>
                    </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="teamLeader"
                    >
                        <Link to="/teamLeader">
                        <UserAddOutlined twoToneColor="#eee" style={{fontSize:'14px', position:'relative', top: '-4px', left:'4px'}}/>
                            <span className="text-gray-200">Team Leaders</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </nav>
        </div>
        </Sider>
    )
}

export default Navigation
