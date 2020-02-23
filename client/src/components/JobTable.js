import React from 'react'
import {Table, Tooltip, Avatar, } from 'antd'
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
    teamLeader: 'Anu',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(({icon,tooltip}) => (
      <Tooltip key={icon} title={tooltip}>
      <span className="text-xl sm:text-3xl ">{icon}</span>
      </Tooltip>
    ))
  },{
    key: '2',
    teamLeader:'Sean D',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(({icon,tooltip}) => (
      <Tooltip key={icon} title={tooltip}>
      <span className="text-xl sm:text-3xl ">{icon}</span>
      </Tooltip>
    ))
  },{
    key: '3',
    teamLeader:'Mattho',
    job: 'St,Kilda',
    setup: m.format('MMMM D, h:mm A'),
    pullDown: 32,
    icon: icon.map(({icon,tooltip}) => (
      <Tooltip key={icon} title={tooltip}>
        <span className="text-xl sm:text-3xl ">{icon}</span>
      </Tooltip>
    ))
  },
];


export const JobTable = () => {
  return (
    <>
    <h1 className="text-gray-900 font-bold text-xl mb-2">Job Overview</h1>
    <Table dataSource={data} className="min-w-64 overflow-auto">
      <Column title="Team Leader" key="teamLeader" render={(data) => <Avatar>{data.teamLeader}</Avatar>} className="w-1/6" />
      <Column title="Job" dataIndex="job" key="Job"/>
      <Column title="Setup" dataIndex="setup" key="Start"/>
      <Column title="PullDown" dataIndex="pullDown" key="End"/>
      <Column title="Icon" dataIndex="icon" key="Icon"/>
    </Table>
    </>
  )
}
