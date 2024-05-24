import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import youtubelogo from "../assets/youtube.svg";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = ({ setSidebar }) => {
  const [query, setQuery] = useState('');
  const [mininav, setMininav] = useState(true);

  useEffect(() => {
    const cancelIcon = document.querySelector('.cancelIcon');
    if (query.trim()) {
      cancelIcon.style.display = 'block';
    } else {
      cancelIcon.style.display = 'none';
    }
  }, [query]);

  useEffect(() => {
    if (mininav) {
      handleNav();
    } else {
      handleMiniNav();
    }
  }, [mininav]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
  };

  const handleNav = () => {
    const hiddenSearch = document.querySelector('.hiddenSearch');
    hiddenSearch.style.display = "none";
  };

  const handleMiniNav = () => {
    const hiddenSearch = document.querySelector('.hiddenSearch');
    hiddenSearch.style.display = "flex";
  };

  return (
    <nav className='flex-div new'>
      <div className="nav-left flex-div">
        <AiOutlineMenu className='menu' onClick={() => setSidebar(prev => !prev)} />
        <Link to='/' className='flex-div'>
          <img src={youtubelogo} alt="YouTube Logo" />
          <h3>YouTube</h3>
          <p>IN</p>
        </Link>
      </div>
      <div className="wrapper flex-div">
        <div className="nav-middle flex-div">
          <input
            type="text"
            placeholder='Search'
            value={query}
            onChange={handleInputChange}
          />
          <MdCancel className='cancelIcon' onClick={clearSearch} />
          <IoSearchOutline className='search-icon' />
        </div>
        <FaMicrophone className='microphone' />
      </div>
      <div className="nav-right flex-div">
        <IoSearchOutline className='SmallSearchIcon' onClick={() => setMininav(prev => !prev)}/>
        <MdOutlineVideoCall />
        <IoMdNotificationsOutline />
        <FaUser />
      </div>
      <div className="hiddenSearch">
        <FaArrowLeft className='arrow' onClick={() => setMininav(prev => !prev)} />
        <div className="Wrapper-smallSearchbar">
          <div className="middle">
            <input type="text" placeholder='Search' />
            <IoSearchOutline className='hiddenSearch-SearchIcon' />
          </div>
        </div>
        <FaMicrophone className='hiddenSearch-microphoneIcon' />
      </div>
    </nav>
  );
}

export default Navbar;
