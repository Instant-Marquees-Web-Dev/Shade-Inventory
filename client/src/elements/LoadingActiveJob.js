import React from 'react';
import { Skeleton, List, Avatar } from "antd";

const listData = [];
for (let i = 0; i < 8; i++) {
  listData.push({
    id: i
  });
}

const LoadingActiveJob = ({loading}) => (
  <List
          itemLayout="vertical"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.id}
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                />
              </Skeleton>
            </List.Item>
          )}
        />
)

export default LoadingActiveJob