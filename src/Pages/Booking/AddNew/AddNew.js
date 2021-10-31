import "./AddNew.css";
import React from "react";
import { useForm } from "react-hook-form";

const AddNew = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://aqueous-lowlands-11333.herokuapp.com/places", {
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
    <div>
      <h1 className="text-center"> Add A New Destination </h1>
      <div className="add-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Place Name"
            className="border border-dark rounded-3 p-1"
          />

          <input
            type="number"
            {...register("price")}
            placeholder="Tour Price"
            className="border border-dark rounded-3 p-1"
          />

          <input
            {...register("img")}
            placeholder="Photo URL"
            className="border border-dark rounded-3 p-1"
          />

          <textarea
            {...register("detail")}
            placeholder="Detail In 1 Line"
            className="border border-dark rounded-3 p-1"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="border border-dark rounded-3 p-1"
          />

          <textarea
            {...register("facilities")}
            placeholder="Other Facilities"
            className="border border-dark rounded-3 p-1"
          />

          <input
            className="bg-danger text-white fw-bold rounded-pill py-2 fs-5"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNew;
