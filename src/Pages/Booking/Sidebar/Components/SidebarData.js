import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "All Booking",
    path: "/allbooking",
    setPath: "allbooking",
    icon: <FaIcons.FaHouseUser></FaIcons.FaHouseUser>,
    cname: "nav-text",
  },
  {
    title: "My Booking",
    path: "/mybooking",
    setPath: "mybooking",
    icon: <FaIcons.FaRegAddressBook></FaIcons.FaRegAddressBook>,
    cname: "nav-text",
  },
  {
    title: "Add New Destination",
    path: "/addnew",
    setPath: "addnew",
    icon: <FaIcons.FaUserPlus></FaIcons.FaUserPlus>,
    cname: "nav-text",
  },
];
