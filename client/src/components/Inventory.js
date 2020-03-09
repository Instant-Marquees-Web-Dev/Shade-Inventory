import React, {useState, useEffect} from 'react'
import {Modal, Form, Input} from 'antd'
import inventoryData from '../utils/inventoryData'

const Inventory = () => {
  const [inventories, setInventories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)
  const [currentItem, setCurrentItem] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [form] = Form.useForm()

  const itemName = currentItem.name || ''
  const itemQuantity = currentItem.quantity || null

  useEffect(() => {
    setInventories(inventoryData) // Update inventory state, NOTE: This data will be grabbed from database 

  }, [])


  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
    const handleEdit = item => {
      editInventory(item)
    }

  const editInventory = item => {
    showModal()
    setCurrentIndex(item)
    setCurrentItem(inventories[item])
  }

  const showModal = () => {
    setModalVisible(true)
    
  }

  const handleOk = e => {
    form
    .validateFields()
    .then(({name, quantity}) => {
      form.resetFields()
      const newName = name ? name : currentItem.name
      const newQuantity = quantity ? quantity : currentItem.quantity
      let newInventory = [...inventories]
      newInventory[currentIndex] = {name:newName, quantity: newQuantity}
      setInventories(newInventory)

    })
    .catch(info => console.log('Validate Failed', info))
    setModalVisible(false)
  }
  const handleCancel = e => {
    setModalVisible(false)
  }

  return (
    <div className="flex justify-center">
      <div className="-my-2 py-2 overflow-x-auto w-11/12 sm:-mx-6 sm:px-6 sm:w-9/12 lg:-mx-8 lg:px-8 lg:w-9/12 xl:w-1/3 ">
      <h1 className="text-gray-900 font-bold text-xl mb-2 ">Inventory</h1>
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {inventories.map(({name, quantity}, i) => (
                <tr key={i}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                  {name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-900">
                  {quantity}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" onClick={()=> handleEdit(i)}>Edit</a>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          title="Edit Inventory"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
            <Form
              {...layout}
              name="Edit Inventory"
              form={form}
              >
              <Form.Item
                label="Name"
                name="name"
              >
              <Input defaultValue={itemName} />
              </Form.Item>

              <Form.Item
                label="Quantity"
                name="quantity"
              >
              <Input 
              defaultValue={itemQuantity}

              />
              </Form.Item>
            </Form>
        </Modal>
      </div>
    </div>  
  )
}

export default Inventory
