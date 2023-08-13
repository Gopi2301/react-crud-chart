import React from 'react'
import CreateStudent from './CreateStudent'
import Sidebar from '../sibebar/Sidebar'
const Dashboard = () => {

    return (
        <div className='col'>
            <div>
                <Sidebar />
            </div>
            <div>
                <CreateStudent />
            </div>
        </div>
    )
}
export default Dashboard
