import "./Footer.css";
import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div
        className="footer pt-4 text-light"
        style={{ backgroundColor: "#1f2937" }}
      >
        <div className="container">
          <div className="row py-md-5">
            <div className="col-md-4 ">
              <h4 className="text-center fw-bold text-light mb-lg-3">
                Contact Us
              </h4>
              <div className="row col-12 mb-3">
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center my-2">
                  <div>
                    <i class="fas fa-envelope fa-lg-3x fa-2x text-light mb-lg-3 my-2"></i>
                  </div>
                  <div>
                    <p>hello@travlio.com</p>
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>
                    <i class="fas fa-headset fa-lg-3x fa-2x text-light mb-lg-3 my-2"></i>
                  </div>
                  <div>
                    <p>+8801629450417</p>
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>
                    <i class="fas fa-map-marker-alt fa-lg-3x fa-2x text-light mb-lg-3"></i>
                  </div>
                  <div>
                    3 Edgar Buildings, <br /> England BA1 2FJ.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <h4 className=" fw-bold text-light mb-lg-3"> Quick Links</h4>
              <p>About us</p>
              <p>Blog</p>
              <p>My Account</p>
              <p>FAQ</p>
              <p>Terms & Conditions</p>
              <p>Contact us</p>
            </div>
            <div className="col-md-2 col-6">
              <h4 className=" fw-bold text-light mb-lg-3">
                {" "}
                Service Categories
              </h4>
              <p>Travel</p>
              <p>Lifestyle</p>
              <p>Fashion</p>
              <p>Destination</p>
              <p>Packages</p>
            </div>
            <div className="col-md-4">
              <h4 className=" fw-bold text-white mb-lg-3"> Feedback </h4>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="mb-3 input-footer"
                    type="email"
                    placeholder="Email"
                  />
                  <Form.Control
                    className="mb-3 input-footer"
                    type="password"
                    placeholder="Phone number"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    className="input-footer"
                    placeholder="Your message..."
                    rows={3}
                  />
                </Form.Group>
                <input
                  type="submit"
                  className="btn btn-secondary fw-bold text-light"
                  value="Submit"
                />
              </Form>
            </div>
          </div>
        </div>
        <div className="bg-dark">
          <p className="text-center p-lg-3 p-2 mt-3 mb-0">
            <small>
              Copyright &copy; 2021 All Rights Reserved, FahadCodes.
            </small>
          </p>
        </div>
      </div>
      <div>
        {/* <!-- component --> */}
        {/* <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl font-bold mb-6">Features</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Cool stuff
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Random feature
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team feature
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another one
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 class="text-xl font-bold mb-6">Resources</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource name
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another resource
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">About</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#nothing"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div class="flex sm:justify-center xl:justify-start">
                <a
                  href="#nothing"
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="#nothing"
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#nothing"
                  class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i class="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      </div>
    </div>
  );
};

export default Footer;
