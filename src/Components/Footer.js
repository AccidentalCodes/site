import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 p-5 dark:bg-zinc-800">
        <div class="col-span-12 items-center justify-center flex flex-col rounded-lg p-3  text-lg font-bold text-white ">
          Follow us
          <div>
            <InstagramIcon className="mr-2" />
            <TwitterIcon className="mr-2" />
            <YouTubeIcon className="mr-2" />
            <LinkedInIcon className="mr-2" />
          </div>
        </div>
        <div class="col-span-12 items-center justify-center  flex flex-col rounded-lg  text-white ">
          © 2023 TheColorAlchemist All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
