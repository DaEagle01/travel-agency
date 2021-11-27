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
      <div className="mt-3">
        <h1 class="text-4xl uppercase font-bold from-current mb-8 text-center">
          Add A New Destination
        </h1>
      </div>
      <div className="add-service  container px-md-5 mr-md-5 mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Place Name"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <input
            type="number"
            {...register("price")}
            placeholder="Tour Price"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <input
            {...register("img")}
            placeholder="Photo URL"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <textarea
            {...register("detail")}
            placeholder="Detail In 1 Line"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <textarea
            {...register("facilities")}
            placeholder="Other Facilities"
            className="border border-dark rounded-3 p-1 py-md-2"
          />

          <input
            className="  text-white fw-bold rounded-xl py-2 fs-5 py-md-2"
            type="submit"
            style={{ backgroundColor: "#f75a2b" }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddNew;
