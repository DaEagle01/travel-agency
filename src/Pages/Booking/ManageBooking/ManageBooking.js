import "./ManageBooking.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyBooking from "../MyBooking/MyBooking";
import AllBooking from "../AllBooking/AllBooking";
import AddNew from "../AddNew/AddNew";
import useFirebase from "../../../hooks/useFirebase";

const ManageBooking = () => {
  const [path, setPath] = useState("allbooking");
  const { user } = useFirebase();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div class="relative bg-white dark:bg-gray-800">
            <div class="flex flex-col sm:flex-row sm:justify-around">
              <div class="w-72 h-screen">
                <div class="flex items-center justify-start mx-6 mt-10">
                  <img
                    class="h-10"
                    src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png"
                    alt="Travlio logo"
                  />
                </div>
                <nav class="mt-10 px-6 ">
                  <li
                    onClick={() => setPath("allbooking")}
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  >
                    <span class="mx-4 text-lg font-normal">All Booking</span>
                    <span class="flex-grow text-right"></span>
                  </li>
                  <li
                    onClick={() => setPath("mybooking")}
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  >
                    <span class="mx-4 text-lg font-normal">My Booking</span>
                    <span class="flex-grow text-right"></span>
                  </li>
                  <li
                    onClick={() => setPath("adddestination")}
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  >
                    <span class="mx-4 text-lg font-normal">
                      Add New Destination
                    </span>
                    <span class="flex-grow text-right"></span>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {path === "mybooking" && <MyBooking></MyBooking>}
          {path === "allbooking" && <AllBooking></AllBooking>}
          {path === "adddestination" && <AddNew></AddNew>}
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
