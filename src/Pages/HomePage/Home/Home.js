import "./Home.css";
import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";
import Sidebar from "../../Booking/Sidebar/Components/Sidebar";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
