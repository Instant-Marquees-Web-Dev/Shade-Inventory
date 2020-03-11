import React, {useState} from 'react';
import {Card, Radio, Typography } from 'antd'
import structureData from '../utils/structureData'

const {Meta} = Card
const { Title, Text } = Typography

// Exaple Total data
const exampleData = {
    legs: 22,
    gable: 10
}

const AddStructure = () => {
    // const [size, setSize] = useState(3)
    // const [type, setType] = useState("")
    const [data, setData] = useState(exampleData)
    const {legs, gable} = data
    return (
        <>
            <h1 className="text-gray-900 font-bold text-xl mb-2">Structures</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100 p-4 w-full">
            <Card
                    hoverable
                    onTabChange={(key) => console.log(key)}
                    actions={[
                    <Radio.Group
                        
                        defaultValue="three" 
                        buttonStyle="solid"
                        onChange={(e) => {
                            const value = e.target.value
                            const USEDLEGS = structureData.size[value].legs
                            // Do nothing if not enough legs
                            if(legs < USEDLEGS){
                                return
                            }
                            else{
                            // Subtract legs according to structure size
                            switch(value) {
                                case "three":
                                    setData({...data, legs: legs - USEDLEGS})
                                    break;
                                case "six":
                                    setData({...data, legs: legs - USEDLEGS})
                                    break;
                                case  "nine":
                                    setData({...data, legs: legs - USEDLEGS})
                                    break;
                                break;
                            }
                            }
                        }}
                    >
                        <Radio.Button value="three">3 Metres</Radio.Button>
                        <Radio.Button value="six">6 Metres</Radio.Button>
                        <Radio.Button value="nine">9 Metres</Radio.Button>
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
                    // <Icon type="setting" key="setting" />,
                    // <Icon type="edit" key="edit" />,
                    ]}
                >
                    <Meta
                    title="Structure Size"
                    description="This is the description"
                    />
            </Card>
            </div>
            <div className=" w-full min-w-full text-center mt-4 bg-gray-100">
            <Title level={2} >REMAINING LEGS</Title>
            <Text>Legs: {legs}</Text>
            </div>
        </>
    )
}

export default AddStructure
