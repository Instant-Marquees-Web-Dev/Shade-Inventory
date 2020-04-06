import React from 'react'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

const AddStructureJob = () => {
  return (
    <>
      <h1 className="text-gray-900 font-bold text-xl mb-4">Structures</h1>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="bg-gray-100 overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">

                <div className="px-4 "> {/* Top Content Start */}

                    <div> {/* Heading START*/}
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Job Information
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500">
                        This information will be displayed on Structure Active Jobs
                        </p>
                    </div> {/* Heading END*/}

                    <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">  {/* Boady Start */}

                        <div className="sm:col-span-3">
                        <label htmlFor="team_leader" className="block text-sm font-medium leading-5 text-gray-700">
                            Team Leader
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input id="team_leader" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="suburb" className="block text-sm font-medium leading-5 text-gray-700">
                            Suburb
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input id="suburb" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="date" className="block text-sm font-medium leading-5 text-gray-700">
                            Date
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <RangePicker
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                size={"large"}
                                style={{
                                    borderRadius:"0.375rem",
                                }}
                                // onChange={onChange}
                                // onOk={onOk}
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">
                            Phone Number
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                        <input type="number" id="phone" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                        </div>

                        <div className="sm:col-span-6">
                        <label htmlFor="job_address" className="block text-sm font-medium leading-5 text-gray-700">
                            Job Address
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input id="job_address" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        </div>

                    </div> {/* Body END*/}
                </div>  {/* Top Content END */}


                <div className="mt-8 border-t border-gray-200 pt-8"> {/* Bottom Content START */}
                <div className="px-4">

                <div> {/* Heading START*/}
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Structure Information
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500">
                        This information is about structure size and type
                        </p>
                </div> {/* Heading END*/}

                <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">   
                <div className="sm:col-span-2">
                    <label htmlFor="size" className="block text-sm font-medium leading-5 text-gray-700">
                            Size
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <select 
                        id="size" 
                        className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        value="3"
                        >
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="length" className="block text-sm font-medium leading-5 text-gray-700">
                            Length
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input type="number" id="length" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="type" className="block text-sm font-medium leading-5 text-gray-700">
                            Type
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                        <select value="dome" id="type" className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="dome">Dome</option>
                            <option value="apex">Apex</option>
                        </select>
                    </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium leading-5 text-gray-700">
                            Note
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <textarea id="about" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a note about the job if needed</p>
                    </div>
                </div>

                    </div>
                </div>{/* Bottom Content END */}


                <div className="mt-8 border-t border-gray-200 pt-5">
                    <div className="flex justify-end">
                    <span className="inline-flex rounded-md shadow-sm">
                        <button type="button" className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                        Cancel
                        </button>
                    </span>
                    <span className="ml-3 inline-flex rounded-md shadow-sm">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        Save
                        </button>
                    </span>
                    </div>
                </div>

                </div>
            </div>
        </div>  
    </>
  )
}

export default AddStructureJob;