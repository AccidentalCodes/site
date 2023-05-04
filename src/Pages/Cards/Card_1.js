import React from "react";
import mainposter from "/Volumes/SIYA/Git/site/src/Img/dark2.jpg";
import Button from "@mui/material/Button";

const Card_1 = () => {
  return (
    <>
      <div class="grid grid-cols-12 gap-3 p-4">
        <div class="col-span-12 row-span-2 m-2 rounded-[30px]  shadow-lg">
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
        </div>
        <div class="col-span-3 row-span-2 m-2 text-white rounded-[20px] p-1 ">
          text 1
        </div>
      </div>
    </>
  );
};

export default Card_1;
