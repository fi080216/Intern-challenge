import React from 'react'
import './SideBar.css'
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";


const SideBar = () =>{

    return (
     <div className='sideBar grid'>
        <div className="logoDiv flex">
        <FaCanadianMapleLeaf  className="icons" />
            <h2>Planti.</h2>
        </div>


        <div className="menuDiv">
            <h3 className="divTile">
                QUICK MENU
            </h3>
            <ul className="menuList grid">


                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <IoMdSpeedometer className='icon'/>
                    <span className='smallText'>
                        Dashboard
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <MdDeliveryDining  className='icon'/>
                    <span className='smallText'>
                        My Orders
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <MdOutlineExplore  className='icon'/>
                    <span className='smallText'>
                        Explore
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <BsTrophy className='icon'/>
                    <span className='smallText'>
                        Products
                    </span>
                    </a>
                </li>


            </ul>
        </div>


        <div className="settingsDiv">
            <h3 className="divTile">
                SETTINGS
            </h3>
            <ul className="menuList grid">


                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <AiOutlinePieChart className='icon'/>
                    <span className='smallText'>
                        Charts
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <BiTrendingUp className='icon'/>
                    <span className='smallText'>
                       Trends
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <FaCalendarAlt   className='icon'/>
                    <span className='smallText'>
                        Contacts
                    </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="" className='menuLink flex'>
                    <BsCreditCard2FrontFill  className='icon'/>
                    <span className='smallText'>
                        Billing
                    </span>
                    </a>
                </li>


            </ul>
        </div>


        
     </div>
    )
}
export default SideBar;