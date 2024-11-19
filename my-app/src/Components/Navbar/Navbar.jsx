import React from "react";
import "./Navbar.css";
import menu_icon from "../../Asserts/menu.png";
import logo from "../../Asserts/logo.png";
import search_icon from "../../Asserts/search.png";
import upload_icon from "../../Asserts/upload.png";
import more_icon from "../../Asserts/more.png";
import notification_icon from "../../Asserts/notification.png";
import profile_icon from "../../Asserts/jack.png";
import { Link } from "react-router-dom";


const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left  flex-div">
        <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
       <Link to='/'> <img className="logo" src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flexr-div">
        <div className="search-box flex-div">
          {" "}
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
