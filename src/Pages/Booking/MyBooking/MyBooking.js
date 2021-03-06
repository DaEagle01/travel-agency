import "./MyBooking.css";
import React, { useEffect, useState } from "react";
import useFirebase from "../../../hooks/useFirebase";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);

  const { user } = useFirebase();
  const eMail = user.email;

  useEffect(() => {
    fetch("https://aqueous-lowlands-11333.herokuapp.com/allusers")
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, []);

  const myOrder = myBooking.filter((booking) => booking.email == eMail);
  const order = myOrder[0];

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`https://aqueous-lowlands-11333.herokuapp.com/allusers/${_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleStatus = (_id, order) => {
    order.status = "Approved";
    fetch(`https://aqueous-lowlands-11333.herokuapp.com/allusers/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>My Bookings</h1>
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
                  {/* {myBooking.map((booking) => ( */}
                  <tbody>
                    <tr>
                      <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#nothing" class="block relative">
                              <img
                                alt="profile-pic"
                                src={order?.img}
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {order?.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {order?.destination}
                        </p>
                      </td>
                      <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {order?.date}
                        </p>
                      </td>
                      <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <button
                            onClick={() => handleStatus(order?._id, order)}
                            class="relative"
                          >
                            {order?.status}
                          </button>
                        </span>
                      </td>
                      <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-danger bg-green-200 opacity-100 rounded-full"
                          ></span>
                          <button
                            onClick={() => handleDelete(order._id)}
                            class="relative btn btn-danger rounded-pill"
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/* ))} */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
