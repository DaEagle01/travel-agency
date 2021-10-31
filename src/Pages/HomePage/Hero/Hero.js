import "./Hero.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="container">
        <Carousel className="container">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-dark ">
              <h3 className="fw-bold">Combining excellence and expertise</h3>
              <p>
                Our hospitals excel in most aspects of medicine and offer a wide
                range of diagnostic and treatment services, some have been
                awarded an 'Outstanding' quality check by the Care Quality
                Commission.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="text-dark">
              <h3 className="fw-bold">
                Our services are delivered by highly-skilled professional
              </h3>
              <p>
                We have intensive care facilities in all of our hospitals, and
                dedicated and expert teams to look after you no matter what
                happens.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark">
              <h3 className="fw-bold">
                Our hospital provides 24/7 hour service
              </h3>
              <p>
                Our hospitals, clinics, outpatient and diagnostics centres, and
                NHS partnerships cover all areas of medicine, including complex
                conditions in both adults and children.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        {/* <section class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="heading-section mb-5">Carousel #06</h2>
            </div>
            <div class="col-md-12">
              <div class="featured-carousel owl-carousel">
                <div class="item">
                  <div class="work-wrap d-md-flex">
                    <div
                      class="img order-md-last carousel-bg1"
                     
                    ></div>
                    <div
                      class="
                      text text-left text-lg-right
                      p-4
                      px-xl-5
                      d-flex
                      align-items-center
                    "
                    >
                      <div class="desc w-100">
                        <h2 class="mb-4">
                          Define <br />
                          Your Budget
                        </h2>
                        <p class="h5">Call: 0123 456 78901</p>
                        <p class="h5 mb-4">Email Address: email@info.com</p>
                        <div class="row justify-content-end">
                          <div class="col-xl-8">
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                        <p>
                          <button
                            type="button"
                            class="btn btn-outline-dark mb-2 py-3 px-4"
                          >
                            Shop the collection Outline
                          </button>
                          <button
                            type="button"
                            class="btn btn-dark mb-2 py-3 px-4"
                          >
                            Learn More
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="work-wrap d-md-flex">
                    <div
                      class="img order-md-last carousel-bg2"
                      
                    ></div>
                    <div
                      class="
                      text text-left text-lg-right
                      p-4
                      px-xl-5
                      d-flex
                      align-items-center
                    "
                    >
                      <div class="py-md-5">
                        <h2 class="mb-4">
                          Kids <br />
                          Collection
                        </h2>
                        <p class="h5">Call: 0123 456 78901</p>
                        <p class="h5 mb-4">Email Address: email@info.com</p>
                        <div class="row justify-content-end">
                          <div class="col-xl-8">
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                        <p>
                          <button
                            type="button"
                            class="btn btn-outline-dark mb-2 py-3 px-4"
                          >
                            Shop the collection Outline
                          </button>
                          <button
                            type="button"
                            class="btn btn-dark mb-2 py-3 px-4"
                          >
                            Learn More
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="work-wrap d-md-flex">
                    <div
                      class="img order-md-last carousel-bg3"
                      
                    ></div>
                    <div
                      class="
                      text text-left text-lg-right
                      p-4
                      px-xl-5
                      d-flex
                      align-items-center
                    "
                    >
                      <div class="py-md-5">
                        <h2 class="mb-4">
                          Ladies <br />
                          Collection
                        </h2>
                        <p class="h5">Call: 0123 456 78901</p>
                        <p class="h5 mb-4">Email Address: email@info.com</p>
                        <div class="row justify-content-end">
                          <div class="col-xl-8">
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                        <p>
                          <button
                            type="button"
                            class="btn btn-outline-dark mb-2 py-3 px-4"
                          >
                            Shop the collection Outline
                          </button>
                          <button
                            type="button"
                            class="btn btn-dark mb-2 py-3 px-4"
                          >
                            Learn More
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="work-wrap d-md-flex">
                    <div
                      class="img order-md-last carousel-bg4"
                      
                    ></div>
                    <div
                      class="
                      text text-left text-lg-right
                      p-4
                      px-xl-5
                      d-flex
                      align-items-center
                    "
                    >
                      <div class="py-md-5">
                        <h2 class="mb-4">
                          Ladies <br />
                          Collection
                        </h2>
                        <p class="h5">Call: 0123 456 78901</p>
                        <p class="h5 mb-4">Email Address: email@info.com</p>
                        <div class="row justify-content-end">
                          <div class="col-xl-8">
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                        <p>
                          <button
                            type="button"
                            class="btn btn-outline-dark mb-2 py-3 px-4"
                          >
                            Shop the collection Outline
                          </button>
                          <button
                            type="button"
                            class="btn btn-dark mb-2 py-3 px-4"
                          >
                            Learn More
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </div>
  );
};

export default Hero;
