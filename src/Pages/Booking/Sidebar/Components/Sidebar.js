import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [path, setPath] = useState("allbooking");
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log("object");
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="sidebar" id="sidebar">
          <Link to="/managebooking" className="menu-bars" onClick={showSidebar}>
            <div className={sidebar ? "nav-menu" : "nav-menu-active"}>
              <FaIcons.FaBars></FaIcons.FaBars>
            </div>
          </Link>
        </div>
        <nav
          className={sidebar ? "nav-menu-active" : "nav-menu"}
          id="nav-menu-active"
        >
          <ul className="navbar-item ps-0 -mt-28 backdrop-grayscale bg-gray-100 ">
            <li className="navbar-toggle">
              <Link
                to="/managebooking"
                className="menu-bars"
                onClick={showSidebar}
              >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li
                key={index}
                className={item.cname}
                // onClick={() => setPath({item.setPath})}
              >
                <Link to={item.path}>
                  <div className="flex gap-2 justify-content-start align-items-center">
                    <div>{item.icon} </div>
                    <div>{item.title}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>{" "}
      </div>
      <div className="col-md-9">
        {/* {path === "mybooking" && <MyBooking></MyBooking>}
        {path === "allbooking" && <AllBooking></AllBooking>}
        {path === "adddestination" && <AddNew></AddNew>} */}
      </div>
    </div>
  );
};

export default Sidebar;
