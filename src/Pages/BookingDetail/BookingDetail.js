import "./BookingDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const BookingDetail = () => {
  const { _id } = useParams();
  const { user } = useFirebase();

  const [bookPlace, setBookPlace] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/places/${_id}`)
      .then((res) => res.json())
      .then((data) => setBookPlace(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    data.email = user.email;
    data.destination = bookPlace.name;
    data.status = "pending";
    console.log(data);

    fetch(`http://localhost:5000/places/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };

  return (
    <div className="container">
      <h1>Hello, {user?.displayName}</h1>
      <h1> {user?.email}</h1>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img src={bookPlace.img} alt="" />
          </div>
          <div>{bookPlace.description}</div>
        </div>
        <div className="col-md-6 add-service">
          <h2 className="text-center text-dark mb-4 fw-bold">
            {" "}
            Book This Tour
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Your Full Name"
              className="border border-dark rounded-3 p-1"
            />
            {/* <input
              {...register("email")}
              // value={user?.email}
              placeholder="Your Email"
              className="border border-dark rounded-3 p-1"
            /> */}
            <input
              type="number"
              {...register("number")}
              placeholder="Your Phone Number"
              className="border border-dark rounded-3 p-1"
            />

            <input
              type="date"
              {...register("date")}
              placeholder="Price"
              className="border border-dark rounded-3 p-1"
            />
            <input
              {...register("img")}
              placeholder="Your Photo URL"
              className="border border-dark rounded-3 p-1"
            />
            <select
              {...register("Tickets Type")}
              className="border border-dark rounded-3 p-1"
              label="Tickets Type"
            >
              <option value="Bus Travel">Travel With Bus</option>
              <option value="Plane Travel">Travel With Plane</option>
            </select>

            <textarea
              {...register("description")}
              placeholder="Description"
              className="border border-dark rounded-3 p-1"
            />

            <input
              className="bg-danger text-white fw-bold rounded-pill py-2 fs-5"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
