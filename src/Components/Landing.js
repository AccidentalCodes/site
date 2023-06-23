import React from "react";
import c1 from "../Png/c1.png";
import c4 from "../Png/c4.png";

const Landing = () => {
  return (
    <>
      <div>
        <div class="grid grid-cols-12 bg-black relative ">
          <div class="col-span-12 sm:col-span-3 absolute row-span-6 z-10">
            <div
              class=" text-1xl md:text-6xl flex flex-col pl-10 pt-20 sm:pt-80 font-semibold font-['Comfortaa'] dark:text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Use color in your
              <span>visual storytelling</span>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-12 row-span-6 h-screen bg-black ">
            <div className="relative ">
              <div className="absolute ">
                <img
                  src={c1}
                  alt="Logo"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
              <div className="absolute">
                <img
                  src={c4}
                  alt="Logo"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex justify-between h-screen bg-black ">
        <div className="absolute ">
          <img
            src={c1}
            alt="Logo"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div className="absolute">
          <img
            src={c4}
            alt="Logo"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="flex items-center absolute text-4xl top-0 bottom-0 m-auto justify-center text-white ">Hello</div>
      </div> */}
    </>
  );
};

export default Landing;
