import React, { useState } from 'react'
import dayjs from "dayjs";
import { Avatar } from 'antd'
import { RightOutlined } from "@ant-design/icons";
import ModalActiveJobs from "./ModalActiveJobs";

const ActiveJobsTable = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [job, setJob] = useState(0);

  const Jobs = data.getActiveJobs;
  const phoneNumbers = data.getAllTeamLeaders;

  let phoneDirectory = new Map();
  phoneNumbers.map(function(element) {
    return phoneDirectory.set(element.name, element.phone, element.id);
  });


  return (
    <>
      <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Team Leader
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Suburb
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Start Date
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      End Date
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Size
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {Jobs.map(
                    (
                      {
                        id,
                        teamLeader,
                        job,
                        suburb,
                        address,
                        setupDate,
                        pulldownDate,
                        structures
                      },
                      index
                    ) => (
                      <tr key={id}>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                          <div className='flex '>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <Avatar>{teamLeader[0]}</Avatar>
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm leading-5 font-medium text-gray-900'>
                                {teamLeader}
                              </div>
                              <div className='text-sm leading-5 text-gray-500'>
                                {phoneDirectory.get(teamLeader)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                          <div className='text-sm leading-5 text-gray-900'>
                            {job}
                          </div>
                          <div className='text-sm leading-5 text-gray-500'>
                            {suburb}
                          </div>
                          <div className='text-sm leading-5 text-gray-500'>
                            {address}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                            {dayjs
                              .unix(setupDate / 1000)
                              .format("MMMM D, h:mm A")}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                            {dayjs
                              .unix(pulldownDate / 1000)
                              .format("MMMM D, h:mm A")}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                          <div className='text-sm leading-5 text-gray-900'>
                            {`${structures[0].size} x ${structures[0].length}`}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                          <a
                            className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline'
                            onClick={() => {
                              setJob(index);
                              setModal(modalState => !modalState);
                            }}
                          >
                            <RightOutlined />
                          </a>
                        </td>
                      </tr>
                    )
                  )}
                  {/* Show Model */
                    modal ? (
                      <ModalActiveJobs
                        modal={modal}
                        data={Jobs[job]}
                        phone={phoneDirectory}
                        handleOk={() => setModal(!modal)}
                        handleCancel={() => setModal(!modal)}
                        teamLeaderID={phoneNumbers[job].id}
                      />
                    ) : null
                  }
                </tbody>
              </table>
            </div>
        </>
  )
}

export default ActiveJobsTable
