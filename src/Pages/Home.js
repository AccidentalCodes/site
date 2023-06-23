import React from 'react';
import logo from '../Img/mylogo1.png';
import mypht from '../Img/siya.png';
import mainposter from '../Img/dark2.jpg';
import card1 from '../Img/money.jpeg';
import card2 from '../Img/Joker.png';
import Button from '@mui/material/Button';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';
import Landing from '../Components/Landing';
import c1 from '../Projects/Mogathirai/mogathirai.png';
import c2 from '../ProjCard/Gonemad_1.40.1.png';
import c3 from '../ProjCard/Time_1.47.1.png';
import c4 from '../ProjCard/imran_1.70.1.png';
import c5 from '../ProjCard/kkp_1.183.1.png';
import c6 from '../ProjCard/tk_1.42.1.png';
import c7 from '../ProjCard/ooty_2.45.1.png';
import c8 from '../ProjCard/dog_1.8.1.png';
import c9 from '../ProjCard/iclean_1.24.1.png';

const Home = () => {
  return (
    <>
      <nav className=" md:bg-black  mx-auto  items-center flex  justify-between">
        <div>{/* <img src={logo} className="w-40 ml-10" alt="Logo" /> */}</div>
      </nav>
      <div class="grid grid-cols-12 gap-3 p-4 ">
        {/* <div class="col-span-12 sm:col-span-7  row-span-2 m-2 p-4 rounded-[30px] text-white items-center justify-center shadow-lg">
          <div class=" text-3xl sm:text-5xl flex flex-col  pt-10 font-semibold font-['Comfortaa'] dark:text-white">
            Use color in your
            <span>visual storytelling</span>
          </div>

          <div class=" mt-5 text-1xl  flex-initial dark:text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="mt-5 ">
            <Button variant="contained" className="w-1/2 ">
              View more
            </Button>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-4  m-2 rounded-[30px] justify-center items-center  shadow-lg">
          <img
            src={mypht}
            className=" h-9/12  sm:w-full   rounded-[30px]"
            alt="Logo"
          />
        </div> */}

        <div className="col-span-12  mb-10">
          <Landing />
        </div>
        {/* <div class="col-span-12 row-span-2 m-2 rounded-[30px]  shadow-lg">
          <div className="p-1 ">
            <img
              src={mainposter}
              className="w-full rounded-[30px]"
              alt="Logo"
            />
          </div>
          <div className="m-3">
            <Button variant="contained">Play</Button>
          </div>
        </div> */}
        {/* card */}
        {/* Big card */}
        {/* <div class="col-span-6 sm:col-span-3  row-span-2 m-2 rounded-[20px] p-1 ">
          <Link to="card_1">
            <img src={card1} className="w-full rounded-[20px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2 m-2 rounded-[20px] p-1 ">
          <Link to="card_1">
            <img src={card1} className="w-full rounded-[20px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2 m-2 rounded-[20px] p-1 ">
          <Link to="card_1">
            <img src={card1} className="w-full rounded-[20px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2 m-2 rounded-[20px] p-1 ">
          <Link to="card_1">
            <img src={card1} className="w-full rounded-[20px]" alt="Logo" />
          </Link>
        </div> */}

        {/* <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
        <div class="col-span-6 sm:col-span-3  row-span-2 ">
          <Link to="card_1 ">
            <img src={c1} className="w-full rounded-[15px] " alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c2} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c3} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c4} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c5} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c6} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c7} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c8} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={c9} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={card2} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={card2} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
        <div class="col-span-6 sm:col-span-3  row-span-2    ">
          <Link to="card_1">
            <img src={card2} className="w-full rounded-[10px]" alt="Logo" />
          </Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
