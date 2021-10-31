import "./Testimonial.css";
import React from "react";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h6 class="text-4xl font-bold from-current pt-5 text-center service-header1">
          Testimonials Of The Traveller
        </h6>
        <h4 class="text-4xl uppercase font-bold from-current mb-8 text-center">
          Some Good Talk About Us
        </h4>
      </div>

      <div class="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>
            We had the most remarkable family tour with Peter Sommer Travels.
            Not only everything was perfect, but we felt, in every instance,
            that our guides and our gulet crew truly cared about us, both the
            kids and adults, and did their best to make this trip memorable.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#nothing" class="block relative">
              <img
                alt="profil"
                src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Jean Miguel
              </span>
              <span class="dark:text-gray-400 text-xs flex items-center">
                Client of Travlio
                <img
                  src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png"
                  class="ml-2 h-4 w-4"
                  alt="this is alt"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>
            The holiday of a life time - our gulet adventure in the Dodecanese
            Greek Islands was without a doubt our favourite family trip. The
            comfort and beauty of the gulet, the incredibly caring crew, the
            delicious food, the stunning beauty of the islands.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#nothing" class="block relative">
              <img
                alt="profil"
                src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-smiles-happily-front-shows-white-perfect-teeth-has-good-mood-feels-satisfied-dressed-basic-pink-t-shirt-poses-indoor_273609-53432.jpg?size=338&ext=jpg"
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Garcia Smith
              </span>
              <span class="dark:text-gray-400 text-xs flex items-center">
                Client of Travlio
                <img
                  src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png"
                  class="ml-2 h-4 w-4"
                  alt="this is alt"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>
            Our gulet cruise from Kos to Patmos was everything and more than
            expected. It lived up to the Peter Sommer Travels' emphasis on
            culture, history, archaeology, comfort and camaraderie. Exceptional
            guides attended to each guest's interests and needs and were
            exceptional hosts.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#nothing" class="block relative">
              <img
                alt="profil"
                src="https://image.freepik.com/free-photo/brunette-man-t-shirt-posing-while-looking-camera-looking-pleased-front-view_176474-64660.jpg"
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Jayden Rodriguez
              </span>
              <span class="dark:text-gray-400 text-xs flex items-center">
                Client of Travlio
                <img
                  src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png"
                  class="ml-2 h-4 w-4"
                  alt="this is alt"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
