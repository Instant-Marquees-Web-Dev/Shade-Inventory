import React from 'react'

const InventoryTable = ({inventories, handleEdit}) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="-my-2 py-2 overflow-x-auto w-11/12 sm:-mx-6 sm:px-6 sm:w-9/12 lg:-mx-8 lg:px-8 lg:w-9/12 xl:w-2/3 ">
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
              {inventories.map(({id, name, specification, count}, i) => (
                <tr key={i}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    {name}
                  </div>
                  <div className="text-sm leading-5 text-gray-500">
                    {specification}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-900">
                  {count}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <button 
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" 
                    onClick={() => handleEdit(i)}
                  >
                  Edit
                  </button>
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

export default InventoryTable
