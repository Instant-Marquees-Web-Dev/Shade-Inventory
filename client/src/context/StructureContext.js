import { createContext } from 'react'
import inventoryData from '../utils/inventoryData'

const StructureContext = createContext(inventoryData)

export default StructureContext