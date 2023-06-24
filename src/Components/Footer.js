import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 p-5 dark:bg-zinc-900">
        <div class="col-span-12 flex justify-between rounded-lg mt-10 text-lg  text-white ">
          <div>
            <div>
              <InstagramIcon className="mr-10" />
              <TwitterIcon className="mr-10" />
              <YouTubeIcon className="mr-10" />
              <LinkedInIcon className="mr-10" />
            </div>
            <div class="col-span-12 mt-5 mb-10 text-white ">
              © 2023 THE COLOR ALCHEMIST, ALL RIGHTS RESERVED
            </div>
          </div>
          <div className=" text-white">
            <p>ewegegege</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
