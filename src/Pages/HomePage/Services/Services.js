import "./Services.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SinglePlace from "../../SinglePlace/SinglePlace";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-lowlands-11333.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="container">
      <div className="my-5">
        <h1 class="text-4xl uppercase font-bold from-current mb-8 text-center service-header1">
          The Top Places For
        </h1>
        <h1 class="text-4xl uppercase font-bold from-current mb-8 text-center">
          Planning Your Holiday
        </h1>
      </div>

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
      <div className="text-center mt-5">
        <Link className="btn btn-outline-secondary btn-lg fw-bold" to="/allplaces">
          See More{" "}
        </Link>
      </div>
    </div>
  );
};

export default Services;
