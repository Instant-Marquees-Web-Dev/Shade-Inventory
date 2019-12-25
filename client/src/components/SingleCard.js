import React from 'react'
import {
    Card,
    Col,
    Row
} from 'antd';

const SingleCard = () => {
    return (
        <div style={{ padding: '30px', textAlign:'center' }} className="bg-gray-200 ">
            <Row gutter={16}>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false} hoverable={true} >
                Card content
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam deserunt temporibus aspernatur sit quasi assumenda nesciunt pariatur, cumque quaerat ducimus repellat fuga hic provident necessitatibus accusantium repudiandae error veritatis!
                </Card>
            </Col>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8} className="mb-4">
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default SingleCard
