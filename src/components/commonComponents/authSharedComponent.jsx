import React from "react";
import logo from "../../assets/35.jpg";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Content = ({contentData}) => {
 

  return (
    <div
      className="w-[50%] object-cover bg-gradient-to-r from-blue-950 to-blue-800"
      style={{
        backgroundImage: `url(${contentData.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <div className="h-full w-full bg-[rgba(23,24,40,0.5)] flex flex-col justify-between text-white">
        <div className="w-[250px] p-10 text-center">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368.78 91.63"
            class="viatorLogo__kIOk"
          >
            <defs></defs>
            <path
              class="cls-header-logo"
              d="M360.75 79a5.26 5.26 0 11-5 5.25 5.13 5.13 0 015-5.25m0-.75a6 6 0 106 6 6 6 0 00-6-6zm.87 6.13a1.63 1.63 0 001.31-1.57c0-1.1-.95-1.56-2.31-1.56h-1.74v6h1v-2.7h.8l1.26 2c.4.63.47.67 1 .67h.51v-.06zm-1.08-.1h-.68v-2.76h.61c1 0 1.41.38 1.41 1.37s-.28 1.34-1.34 1.34zM79.98 18.2h22.15v72H79.98zM223.42 83c-6.51 0-9.61-3.91-9.61-10.59V24.2h17.59v-6h-17.59V.2h-21.28l-1 18h-9.44v6h9.44v47.43c0 12.22 7 20.19 21.34 20.19 10.75 0 17.11-4.39 19.71-10.25l-1-1.14a13.43 13.43 0 01-8.16 2.57z"
              fill="#0a6854"
            ></path>
            <path
              class="cls-header-logo"
              d="M269.7 16.57c-23.62 0-38.61 16.45-38.61 38 0 21.33 14 37.29 38.12 37.29 24.6 0 38.6-16.44 38.6-37.95 0-21.37-14.66-37.34-38.11-37.34zm-.16 70.05C257.64 86.62 256 77 256 54c0-22.64 1.62-32.42 13.35-32.42 11.89 0 13.52 9.78 13.52 32.74.02 22.52-1.44 32.3-13.33 32.3zM338.81 30.58l-.49-12.38h-21.5v72H339V32.54a14.3 14.3 0 014.11-.66c3.95 0 8.55 1.63 22.36 8.15l1.31-.49v-20.2a14.57 14.57 0 00-8.78-2.77c-6.21 0-13.44 3.91-19.19 14.01zM153.35 81.57l2.55 8.63h18.95V34.82c0-12.22-9.61-18.25-25.41-18.25-10.59 0-23.62 2.93-32.58 5.87l-1 12.54 1.31.65c16.94-11.4 22-14 27.2-14 6 0 8.47 3.1 8.47 9.61v15c-25.08 5.21-40.4 9-40.4 26.06 0 11.73 7.82 19.55 20.37 19.55 9.63-.02 16.79-4.58 20.54-10.28zm-19.06-13.36c0-11.08 3.75-13.85 18.57-16.94V79a14.29 14.29 0 01-9.45 3.1c-6.35-.04-9.12-3.63-9.12-13.89z"
              fill="#0a6854"
            ></path>
            <circle
              class="cls-header-logo"
              cx="57.25"
              cy="30.2"
              r="13.5"
              fill="#0a6854"
            ></circle>
            <path
              class="cls-header-logo"
              d="M42.39 90.2l7.05-15.83L24.43 18.2H.75l32.06 72h9.58z"
              fill="#0a6854"
            ></path>
          </svg>
          <span className="text-[10px] text-center">a Tripadvisor company</span>
        </div>
        <div className="h-[130px] space-y-5 px-10">
          <h1 className="text-3xl font-bold text-white w-[80%]">
            {contentData.title}
          </h1>
          <p>{contentData.description}</p>
        </div>
        <div className="p-10 flex gap-3">
          <FaInstagram className="size-9" />
          <FaFacebookSquare className="size-9" />
          <FaSquareTwitter className="size-9" />
        </div>
      </div>
    </div>
  );
};

export default Content;
