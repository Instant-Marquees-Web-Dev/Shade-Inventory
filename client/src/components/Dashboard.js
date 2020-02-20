import React from 'react';
import SingleCard from './SingleCard';
import { JobTable } from './JobTable';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <SingleCard/> */}
            <JobTable/>
        </div>
    )
}

export default Dashboard
