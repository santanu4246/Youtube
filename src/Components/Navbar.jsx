import React from 'react'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
import youtubelogo from "../assets/youtube.svg";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

const Navbar = ({setSidebar}) => {
  return (
   <nav className='flex-div'>
    <div className="nav-left flex-div">
      <AiOutlineMenu className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
      <Link to='/' className='flex-div'>
      <img src={youtubelogo} alt="" />
      <h3>YouTube</h3>
      <p>IN</p>
      </Link>
    </div>

    <div className="wrapper flex-div">
    <div className="nav-middle flex-div">
      <input type="text" placeholder='Search'/>
      <IoSearchOutline className='search-icon'/>
    </div>
    <FaMicrophone className='microphone'/>
    </div>
    <div className="nav-right flex-div">
    <MdOutlineVideoCall />
    <IoMdNotificationsOutline />
    <FaUser />
    </div>
   </nav>
  )
}

export default Navbar;