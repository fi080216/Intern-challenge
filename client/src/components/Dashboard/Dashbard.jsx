import React from 'react'
import Axios from 'axios'

import SideBar from './SideBar Section/SideBar'
import Body from './Body Section/BodySection'


function Dashboard(){
    return(
        <div>
            <Body />
            <SideBar />
        </div>

    )
}

export default Dashboard;