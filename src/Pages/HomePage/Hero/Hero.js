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
      <Carousel className="container">
        <Carousel.Item className="slider1">
          <div class="sliderAx h-auto">
            <div id="slider-1" class="container mx-auto">
              <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill">
                <div class="md:w-1/2">
                  <p class="font-bold text-sm uppercase">Explore The Word</p>
                  <p class="text-3xl font-bold">Hello world</p>
                  <p class="text-2xl mb-10 leading-none">
                    New experiences bring us new knowledge.
                  </p>
                  <a
                    href="#nothing"
                    class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              {/* <!-- container --> */}
              <br />
            </div>
          </div>

          <Carousel.Caption className="text-dark "></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider2">
          <div class="sliderAx h-auto">
            <div id="slider-1" class="container mx-auto">
              <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill">
                <div class="md:w-1/2">
                  <p class="font-bold text-sm uppercase">Explore The Word</p>
                  <p class="text-3xl font-bold">Hello world</p>
                  <p class="text-2xl mb-10 leading-none">
                    New experiences bring us new knowledge.
                  </p>
                  <a
                    href="#nothing"
                    class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              {/* <!-- container --> */}
              <br />
            </div>
          </div>

          <Carousel.Caption className="text-dark "></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider3">
          <div class="sliderAx h-auto">
            <div id="slider-1" class="container mx-auto">
              <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill">
                <div class="md:w-1/2">
                  <p class="font-bold text-sm uppercase">Explore The Word</p>
                  <p class="text-3xl font-bold">Hello world</p>
                  <p class="text-2xl mb-10 leading-none">
                    New experiences bring us new knowledge.
                  </p>
                  <a
                    href="#nothing"
                    class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              {/* <!-- container --> */}
              <br />
            </div>
          </div>

          <Carousel.Caption className="text-dark "></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
