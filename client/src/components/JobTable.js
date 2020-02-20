import React from 'react'
import {Table, Divider, Tag, Tooltip} from 'antd'
import dayjs from 'dayjs'

const {Column} = Table;
const m = dayjs('05/02/69 1:0 PM', 'MM/DD/YY H:mm:ss A')
const icon = [
  {
    icon: '⛺️',
    tooltip: 'Marquee',
  },
  {
    icon: '☂️',
    tooltip: 'Umbrella',
  },
  {
    icon: '🏛',
    tooltip: 'Structure'
  }
]
const data = [
  {
    key: '1',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(i => (
      <Tooltip title={i.tooltip}>
        <span>{i.icon}</span>
      </Tooltip>
    ))
  },{
    key: '1',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(i => (
      <Tooltip title={i.tooltip}>
        <span>{i.icon}</span>
      </Tooltip>
    ))
  },{
    key: '1',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(i => (
      <Tooltip title={i.tooltip}>
        <span>{i.icon}</span>
      </Tooltip>
    ))
  },
];

export const JobTable = () => {
  return (
    <Table dataSource={data}>
      <Column title="Job" dataIndex="job" key="Job"/>
      <Column title="Setup" dataIndex="setup" key="Start"/>
      <Column title="PullDown" dataIndex="pullDown" key="End"/>
      <Column title="Icon" dataIndex="icon" key="Icon"/>
    </Table>
  )
}
