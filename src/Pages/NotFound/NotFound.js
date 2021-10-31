import "./NotFound.css";
import React from "react";
import error from "../../images/error.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="text-center text-danger">404! Page not found...</h2>
      </div>
      <div>
        <img className="img-fluid w-50 mx-auto" src={error} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
