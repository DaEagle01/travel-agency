import "./SinglePlace.css";
import React from "react";
import { Link } from "react-router-dom";

const SinglePlace = (props) => {
  const { img, name, detail, description, price, _id } = props.place;

  return (
    <div>
      <div class=" flex justify-center items-center ">
        <div class="container  p-3 bg-gray-50 rounded-xl">
          <div class="">
            <div class="bg-white">
              <div>
                <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <img
                      class="w-full p-1"
                      style={{ height: "250px" }}
                      src={img}
                      alt="images given"
                    />
                    <div class="px-4 py-2">
                      <div class="flex space-x-2 mt-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <h3 class="text-lg text-gray-600 font-semibold mb-2">
                          {name}
                        </h3>
                      </div>
                      <p class="text-sm tracking-normal">{detail}</p>
                      <h6>
                        Price: <span className="fs-4">${price}</span> / person{" "}
                        &nbsp;
                      </h6>

                      <Link to={`/placeorder/${_id}`}>
                        <button class="mt-3 w-full text-center bg-yellow-400 py-2 fw-bold rounded-lg">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlace;
