import React from 'react'
import { RightOutlined } from "@ant-design/icons";

const TeamLeaderTable = ({teamleader}) => {
  console.log(teamleader)
  return (
    <div className="flex justify-center mb-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-11/12">
        <h1 className="text-gray-900 font-bold text-xl mb-2 self-start">Team Leader</h1>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                      <thead>
                      <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Phone number
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Email
                          </th>

                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                      </tr>
                      </thead>
                      <tbody className="bg-white">
                      {teamleader.map(({name, phone}, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex ">
                              <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              </div>
                              <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">{name}</div>
                              </div>
                          </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">Email</div>
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
  )
}

export default TeamLeaderTable
