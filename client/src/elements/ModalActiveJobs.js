import React from "react";
import dayjs from "dayjs";
import { Modal } from "antd";

const ModalActiveJobs = ({ modal, handleOk, handleCancel, data, phone }) => {
  const [structure] = data.structures;

  return (
    <Modal
      title='Active Jobs details'
      visible={modal}
      onOk={handleOk}
      onCancel={handleCancel}
      width={850}
      centered
    >
      <div>
        <div>
          {/* <h3 className="text-lg leading-6 font-medium text-gray-900">
      Active Jobs Information
    </h3>
  </div>
  <div className="mt-5 border-t border-gray-200 pt-5"> */}
          <dl>
            <div className=' sm:grid sm:grid-cols-3 sm:gap-4'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Team Leader
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.teamLeader}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Suburb
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.suburb}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Address
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.address}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Setup Date
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {dayjs.unix(data.setupDate / 1000).format("MMMM D, h:mm A")}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Pulldown Date
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {dayjs.unix(data.pulldownDate / 1000).format("MMMM D, h:mm A")}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Structure
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {`${structure.size} x ${structure.length} || ${structure.structureType}`}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Phone Number
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {phone.get(data.teamLeader)}
              </dd>
            </div>
            <div className='mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <dt className='text-sm leading-5 font-medium text-gray-500'>
                Notes
              </dt>
              <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                {structure.Notes}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Modal>
  );
};

export default ModalActiveJobs;
