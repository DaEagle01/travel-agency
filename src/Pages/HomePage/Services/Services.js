import "./Services.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SinglePlace from "../../SinglePlace/SinglePlace";
import { Row } from "react-bootstrap";

const Services = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="container">
      <h1 class="text-4xl uppercase font-bold from-current mb-8">
        Top Places For Your Holiday
      </h1>
      {places.length == 0 ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Row
          xs={1}
          md={3}
          className="g-4 mx-auto"
          style={{ maxWidth: "1300px" }}
        >
          {places.slice(0, 6).map((place) => (
            <div>
              <SinglePlace key={place._id} place={place}></SinglePlace>
            </div>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
