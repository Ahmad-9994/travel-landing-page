import React from "react";
import cradImge from "../../assets/5c.jpg";
import Ratting from "../commonComponents/Ratting";
import { IoMdTime } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";

const DetailCard = () => {
  return (
    <div class="w-full max-w-[23%] bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-4 relative">
        <img
          className="rounded-lg w-full h-auto"
          src={cradImge}
          alt="product image"
        />
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
          <FaRegHeart size={20}/>
        </div>
      </div>

      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight">
            2 Days Private Tour in Lahore
          </h5>
        </a>
        <div className="flex gap-2 items-center ">
          <SiTicktick size={13} />
          <p className="text-[13px] font-semibold">Free Cancelation</p>
        </div>
        <div className="flex gap-1 items-center ">
          <IoMdTime size={15} />
          <p className="text-[13px] font-semibold">23 Days</p>
        </div>
        <Ratting />
        <div class="flex items-end justify-between ">
          <div>
            <p className="text-md font-semibold tracking-tight">From</p>
            <span class="text-2xl font-bold">$599</span>
          </div>
          <a
            href="#"
            class="text-white bg-[#00876a] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center  dark:hover:bg-[#00876a] dark:focus:ring-[#00876a]"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
