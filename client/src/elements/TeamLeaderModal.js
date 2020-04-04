import React from 'react'
import { Modal } from 'antd'

const TeamLeaderModal = ({ modal, handleOk, handleCancel, teamLeader, setTeamLeader}) => {
  const {name, phone, email} = teamLeader
  
  const updateField = e => {
    setTeamLeader({
      ...teamLeader,
      [e.target.name] : e.target.value
    })
  }

  return (
    <Modal
      title="Add Team Leader"
      visible={modal}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ top: 20 }}
    >
    <div >
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
          <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input 
                id="name" 
                name="name"
                type="text"
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                value={name}
                onChange={updateField}
              />
            </div>
          </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label htmlFor="phoneNo" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            Phone Number
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input 
                id="phoneNo" 
                name="phone"
                type='number'
                pattern="[0-9]*" 
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                value={phone}
                onChange={updateField}
              />
            </div>
          </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            Email
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input 
                id="email" 
                name="email"
                type="email" 
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                // **Email does not work untill graphql api accepts email**
                // value={email}
                // onChange={updateField}
              />
            </div>
          </div>
      </div>
    </div>

    </Modal>
  )
}

export default TeamLeaderModal
