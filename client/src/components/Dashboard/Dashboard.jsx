import React from 'react'
import './Dashboard.css'
import Body from './Body Section/BodySection'
import SideBar from './Sidebar/SideBar'

const Dashboard = () =>{
    return (
        <div className='container'>
            
            <SideBar />
            <Body />
            
            
        </div>
    )
}

export default Dashboard;