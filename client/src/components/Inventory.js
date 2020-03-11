import React, {useState, useEffect} from 'react'
import {Modal, Form, Input} from 'antd'
import inventoryData from '../utils/inventoryData'
import InventoryTable from '../elements/InventoryTable'

const Inventory = () => {
  const [inventories, setInventories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)
  const [currentItem, setCurrentItem] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [form] = Form.useForm();
  let itemName = Object.entries(currentItem).length ? currentItem.name : ''
  let itemQuantity = Object.entries(currentItem).length ? currentItem.quantity : ''
  
  useEffect(() => {
    setInventories(inventoryData) // Update inventory state, NOTE: This data will be grabbed from database 

  }, [])

  useEffect(() => {
  }, [currentItem])
  
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
    form.resetFields()
  }

  const showModal = () => {
    setModalVisible(true)
    
  }

  const handleOk = e => {
    form
    .validateFields()
    .then(({name, quantity}) => {
      const newName = name ? name : currentItem.name
      const newQuantity = quantity ? quantity : currentItem.quantity
      let newInventory = [...inventories]
      newInventory[currentIndex] = {name:newName, quantity: newQuantity}
      setInventories(newInventory)
      form.resetFields()
      
    })
    .catch(info => console.log('Validate Failed', info))
    setModalVisible(false)
  }
  const handleCancel = e => {
    setModalVisible(false)
  }

  return (
    <>
    <InventoryTable inventories={inventories} handleEdit={handleEdit} />
    <Modal
          title="Edit Inventory"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          >

          <Form
            form={form}
            {...layout}
            name="Edit Inventory"
            onFinish={handleOk}
          >
            <Form.Item
              label="Name"
              name="name"
              >
                <Input defaultValue={itemName}/>
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              >
                <Input defaultValue={itemQuantity}/>
            </Form.Item>

          </Form>

        </Modal> 
    </>
  )
}

export default Inventory