import "./AllBooking.css";
import React, { useEffect, useState } from "react";

const AllBooking = () => {
  const [allUser, setAllUser] = useState([]);
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    fetch("https://aqueous-lowlands-11333.herokuapp.com/allusers")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      fetch(`https://aqueous-lowlands-11333.herokuapp.com/allusers/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const handleStatus = (_id, singleUser) => {
    singleUser.status = "Approved";
    fetch(`https://aqueous-lowlands-11333.herokuapp.com/allusers/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(singleUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                {allUser.map((singleUser) => (
                  <tbody>
                    <tr>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#nothing" class="block relative">
                              <img
                                alt="profile-pic"
                                src={singleUser?.img}
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="ml-2 mr-8 md:mr-0">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {singleUser.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {singleUser.destination}
                        </p>
                      </td>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {singleUser.date}
                        </p>
                      </td>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <button
                            onClick={() =>
                              handleStatus(singleUser._id, singleUser)
                            }
                            class="relative"
                          >
                            {singleUser?.status}
                          </button>
                        </span>
                      </td>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-danger bg-green-200 opacity-100 rounded-full"
                          ></span>
                          <button
                            onClick={() => handleDelete(singleUser._id)}
                            class="relative btn btn-danger rounded-pill"
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                      {/* <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                        <a
                          href="#nothing"
                          class="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td> */}
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooking;
