

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React from "react";
import Content from "../components/commonComponents/authSharedComponent";
import loginImage from "../assets/login.avif"


const contentData = {
  title: "Start Your Journey with Us!",
  description:
    "Join our community of travelers! Sign up to explore exclusive destinations, receive personalized travel recommendations, and access members-only deals. Discover new places and experiences, all tailored to your unique travel style",
  image: loginImage, 
};

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="min-h-[100vh]">
      <div className="flex">
        <Content contentData={contentData}/>
        <div className="h-full min-h-[100vh] flex flex-col justify-center items-center w-[50%] bg-gradient-to-r from-[#00876a] to-[#23cea9] pt-2">
          <h1 className="my-10 lg:mb-10 text-white font-nunito text-3xl font-bold text-center">
          Make Travel Dreams Real with <span className="text-[#265067]">Viator</span>
          </h1>
          <form className="max-w-[450px] w-full lg:max-w-[400px] px-2 pb-4 space-y-4">
            <div className="space-y-1">
              <input
                type="text"
                autoComplete="off"
                placeholder="Email"
                className="h-12 p-4 ring-2 rounded-full text-normal text-black mx-2 w-full ring-[#265067]"
              />
            </div>

            <div className="relative mx-2 w-full">
              <input
                type={passwordShown ? "text" : "password"}
                className="h-12 p-4 pl-4 pr-10 rounded-full text-normal text-black w-full ring-2 ring-[#265067]"
                autoComplete="off"
                placeholder="Password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute top-0 bottom-0 right-4 flex items-center my-2 text-lg cursor-pointer"
              >
                {passwordShown ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
            <button
              type="button"
              className="h-12 p-2 w-full rounded-full text-normal mb-4 mx-2 bg-[#265067] hover:opacity-70 text-white"
            >
             Login
            </button>
            <p className="text-center text-white mx-2">
            Don’t have an account?{" "}
              <a className="hover:opacity-75 font-semibold cursor-pointer">
              Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
