import React, { useState } from 'react'
import { Modal } from 'antd'

const ModalInventory = ({ isModal, handleOk, toggleModal, currentItem}) => {
  const { id, name, specification, count } = currentItem
  const [newCount, setNewCount] = useState(count || '')
  const handleChange = e => setNewCount(e.target.value)

  return (
    <Modal
      title="Edit Structure Inventory"
      visible={isModal}
      onOk={() => handleOk(id, newCount)}
      onCancel={toggleModal}
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
                defaultValue={name}
                disabled
              />
            </div>
          </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label htmlFor="spec" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            Specification
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input 
                id="spec" 
                name="spec"
                type='text'
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                defaultValue={specification}
                disabled
              />
            </div>
          </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label htmlFor="count" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            Count
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input 
                id="count" 
                name="count"
                type="number" 
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                value={newCount}
                onChange={handleChange}
              />
            </div>
          </div>
      </div>
    </div>

    </Modal>
  )
}

export default ModalInventory