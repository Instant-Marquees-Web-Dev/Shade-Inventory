import React from 'react'
import {Avatar} from 'antd'
import {RightOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'

const dates = [
  dayjs('05/02/69 6:0 AM', 'MM/DD/YY H:mm:ss A').format('MMMM D, h:mm A'),
  dayjs('05/04/69 1:0 PM', 'MM/DD/YY H:mm:ss A').format('MMMM D, h:mm A')
]

const datas = [
  {
    id: 1,
    teamLeader: 'Anu',
    phoneNo: 9123123123,
    job: 'Dandenong,',
    address: '8 Steven St',
    startDate: dates[0],
    endDate: dates[1],
    size: '3 x 6'
  },
  {
    id: 2,
    teamLeader: 'Sean D',
    phoneNo: 8123123123,
    job: 'Pakenham,',
    address: '8 Oxford St',
    startDate: dates[0],
    endDate: dates[1],
    size: '3 x 9'
  },
]

const ActiveJobs = () => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-11/12">
        <h1 className="text-gray-900 font-bold text-xl mb-2 self-start">Active Jobs</h1>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                      <thead>
                      <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Team Leader
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Suburb
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Start Date
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          End Date
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Size
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                      </tr>
                      </thead>
                      <tbody className="bg-white">
                      {datas.map(({id, teamLeader, phoneNo, job, address , startDate, endDate, size}) => (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex ">
                              <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              </div>
                              <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">{teamLeader}</div>
                              <div className="text-sm leading-5 text-gray-500">{phoneNo}</div>
                              </div>
                          </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{job}</div>
                          <div className="text-sm leading-5 text-gray-500">{address}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {startDate}
                          </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {endDate}
                          </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{size}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"><RightOutlined /></a>
                          </td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                    </div>
                </div>
            </div>  
        </>
  )
}

export default ActiveJobs
