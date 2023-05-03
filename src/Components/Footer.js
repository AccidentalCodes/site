import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 p-5">
        <div class="col-span-6 flex flex-col rounded-lg p-3  text-lg font-bold text-white shadow-lg">
          Follow us
          <div>
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div class="col-span-6 rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500 shadow-lg">
          6
        </div>
        <div class="col-span-12 rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500 shadow-lg">
          7
        </div>
        <div class="col-span-12 rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500 shadow-lg">
          7
        </div>
      </div>
    </div>
  );
};

export default Footer;
