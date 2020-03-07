import React, {useState} from 'react'
import {
    Link
} from "@reach/router";
import {
    Layout,
    Menu,
} from "antd";

import {BankTwoTone} from '@ant-design/icons';

const {
    Sider
} = Layout;

const { SubMenu } = Menu

const Navigation = () => {
    const [currentKey, setCurrentKey] = useState('structure')

    const handleClick = e => {
        console.log('click')
        console.log(e)
    }
    return (
        <Sider  collapsible breakpoint="md" collapsedWidth="0" >
        <div className="flex py-4 mt-4 justify-center text-lg">
            <h1 className="text-gray-200">INSTANT MARQUEES</h1>
        </div>
        <div>
            <nav>
                <Menu 
                theme="dark" 
                onClick={handleClick}  
                defaultSelectedKeys={currentKey} 
                defaultOpenKeys={['structure']}
                mode="inline">
                    {/* <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="appstore" />
                        <span>Dashboard</span>
                    </Link>
                    </Menu.Item> */}
                    {/* <Menu.Item key="structure">
                        <Link to="/">
                        <BankTwoTone twoToneColor="#eee" style={{fontSize:'14px', position:'relative', top: '-4px', left:'4px'}}/>
                        <span>Structure</span>
                        </Link>
                    </Menu.Item> */}
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
                        <Link to="/activeJobs">
                            Active Jobs
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="addStructure">
                        <Link to="/addStructure">
                            Add Structure
                        </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </nav>
        </div>
        </Sider>
    )
}

export default Navigation
