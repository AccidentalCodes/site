import React from "react";
import c1 from "../Png/c1.png";
import c2 from "../Png/c2.png";
import c3 from "../Png/c3.png";

const Landing = () => {
  return (
    <>
      <div class="grid grid-cols-12 bg-black relative ">
        <div class="col-span-12 sm:col-span-3 absolute row-span-6 z-10">
          <div
            class=" text-1xl sm:text-6xl flex flex-col pl-10 pt-20 sm:pt-80 font-semibold font-['Comfortaa'] dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Use color in your
            <span>visual storytelling</span>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-12 row-span-6 ">
          <div className="relative ">
            <div className="absolute bg-black">
              <img
                src={c1}
                alt="Logo"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="absolute">
              <img
                src={c2}
                alt="Logo"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </div>
            <div className="absolute">
              <img
                src={c3}
                alt="Logo"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
