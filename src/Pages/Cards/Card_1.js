import React from 'react';
import Button from '@mui/material/Button';
import card1G from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk2.png';
import card1B from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk2i.png';
import card2G from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk3.png';
import card2B from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk3i.png';
import card3G from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk7.png';
import card3B from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk7i.png';
import card4G from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk4.png';
import card4B from '/Volumes/SIYA/Git/site/src/Projects/TPK/tpk4i.png';
import ReactCompareImage from 'react-compare-image';
import Footer from '../../Components/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';

const Card_1 = () => {
  return (
    <>
     
      <div class="grid grid-cols-12 gap-3 overflow-hidden p-4">
        <div class="col-span-12 mb-10 row-span-2 m-2 rounded-[30px] shadow-lg">
          <div className="p-1">
            <div className="aspect-w-16 aspect-h-8 rounded-[30px]">
              <iframe
                src="https://www.youtube.com/embed/Z5xw4lcrXPA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class=" w-full h-full rounded-[30px]"></iframe>
            </div>
          </div>
        </div>
        <div className="col-span-12 mb-10">
          <div class="col-span-12 row-span-2 m-2 flex items-center justify-center text-white text-4xl p-1 ">
            Thuru Pudicha Kadhal
          </div>
          <div className="col-span-12 flex items-end justify-center text-white text-1xl">
            <span className="text-zinc-500  "> Written & Directed</span>
            <span className="ml-1 text-2xl ">
              Pandian <InstagramIcon />
            </span>
          </div>
          <div className="col-span-12 flex  items-end justify-center text-white text-1xl">
            <div className="mr-2">
              <span className="text-zinc-500"> Dop</span>
              <span className="ml-1 text-2xl ">
                Surya <InstagramIcon />
              </span>
            </div>
            <div className="mr-2">
              <span className="text-zinc-500"> Editor</span>
              <span className="ml-1 text-2xl ">
                Lena <InstagramIcon />
              </span>
            </div>
            <div className="mr-2">
              <span className="text-zinc-500"> Music</span>
              <span className="ml-1 text-2xl ">
                Lokesh <InstagramIcon />
              </span>
            </div>
          </div>
          <div className="col-span-12 flex  items-end justify-center text-white text-1xl">
            <div className="mr-2">
              <span className="text-zinc-500"> VFX & PUBLICITY DESIGN</span>
              <span className="ml-1 text-2xl ">
                Vishal Suresh <InstagramIcon />
              </span>
            </div>
            <div className="mr-2">
              <span className="text-zinc-500"> SINGER</span>
              <span className="ml-1 text-2xl ">
                Martin <InstagramIcon />
              </span>
            </div>
            <div className="mr-2">
              <span className="text-zinc-500">LYRICRIST </span>
              <span className="ml-1 text-2xl ">
                Saleem r Baadshah <InstagramIcon />
              </span>
            </div>
            <div className="mr-2">
              <span className="text-zinc-500">Colorist </span>
              <span className="ml-1 text-2xl ">
                Siyayoudeen <InstagramIcon />
              </span>
            </div>
          </div>
        </div>

        <div class="col-span-12  sm:col-span-4 md:col-span-3 rounded-[30px] row-span-2 m-2 text-white  p-1 ">
          <ReactCompareImage
            className="rounded-[30px]"
            leftImage={card2B}
            rightImage={card2G}
            leftImageLabel="Befote"
            rightImageLabel="After"
          />
        </div>
        <div class="col-span-12 sm:col-span-4 md:col-span-3 rounded-[30px] row-span-2 m-2 text-white  p-1 ">
          <ReactCompareImage
            className="rounded-[30px]"
            leftImage={card1B}
            rightImage={card1G}
            leftImageLabel="Befote"
            rightImageLabel="After"
          />
        </div>
        <div class="col-span-12 sm:col-span-4 md:col-span-3 rounded-[30px] row-span-2 m-2 text-white  p-1 ">
          <ReactCompareImage
            className="rounded-[30px]"
            leftImage={card3B}
            rightImage={card3G}
            leftImageLabel="Befote"
            rightImageLabel="After"
          />
        </div>
        <div class="col-span-12 sm:col-span-4 md:col-span-3 rounded-[30px] row-span-2 m-2 text-white  p-1 ">
          <ReactCompareImage
            className="rounded-[30px]"
            leftImage={card4B}
            rightImage={card4G}
            leftImageLabel="Befote"
            rightImageLabel="After"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Card_1;
