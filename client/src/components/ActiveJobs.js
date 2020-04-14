import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {  GET_JOB_DATA } from '../queries'
import LoadingActiveJob from "../elements/LoadingActiveJob";
import ActiveJobsTable from "../elements/ActiveJobsTable";
import WeatherWidget from '../elements/WeatherWidget'
import  {ChartTemp} from '../elements/Charts'

const ActiveJobs = () => {
  const { loading, error, data } = useQuery(GET_JOB_DATA);

  if (loading) {
    return <LoadingActiveJob loading={loading} />;
  }

  if (error) {
    return <h1>Error loading active dashboad</h1>
  }


  return (
    <>
      <div className='flex justify-center mb-4 h-full'>
        <div className='flex flex-col -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-11/12'>
          <h1 className='text-gray-900 font-bold text-xl mb-2 self-start'>
            Active Jobs
          </h1>
          <ActiveJobsTable data={data}/>
          <WeatherWidget/>
          
        </div>
      </div>
    </>
  );
};

export default ActiveJobs;
