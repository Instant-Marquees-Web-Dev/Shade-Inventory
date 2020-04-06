import {useState} from 'react'

export const useModal = (initialState) => {
  const [modalOpen, setModalOpen] = useState(initialState)

  const toggle = () => {
    setModalOpen(prevState => !prevState)
  }

  return [modalOpen, toggle]

}
