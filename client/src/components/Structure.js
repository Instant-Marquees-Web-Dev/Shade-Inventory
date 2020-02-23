import React from 'react';
import {Card, Icon, Radio } from 'antd'

const {Meta} = Card

const Structure = () => {
    return (
        <>
            <h1 className="text-gray-900 font-bold text-xl mb-2">Structures</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100 p-4 w-full">
            <Card
                    hoverable
                    onTabChange={(key) => console.log(key)}
                    actions={[
                    <Radio.Group
                        
                        defaultValue="3" 
                        buttonStyle="solid"
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <Radio.Button value="3">3 Metres</Radio.Button>
                        <Radio.Button value="6">6 Metres</Radio.Button>
                        <Radio.Button value="9">9 Metres</Radio.Button>
                    </Radio.Group>
                    ]}
                >
                    <Meta
                    title="Structure Size"
                    description="What is the size of your structue"
                    />
            </Card>
            <Card
                    hoverable
                    onTabChange={(key) => console.log(key)}
                    actions={[
                    <Radio.Group
                    className="align-middle"
                        
                        defaultValue="apex" 
                        buttonStyle="solid"
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <Radio.Button value="apex">Apex</Radio.Button>
                        <Radio.Button value="normal">Normal</Radio.Button>
                    </Radio.Group>
                    ]}
                >
                    <Meta
                    title="Type of Structure"
                    description="Apex: 3M, Vic Market | Normal"
                    />
            </Card>
            <Card
                    hoverable   
                    actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    ]}
                >
                    <Meta
                    title="Structure Size"
                    description="This is the description"
                    />
            </Card>
            </div>
        </>
    )
}

export default Structure
