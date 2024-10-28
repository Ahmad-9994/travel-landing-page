import React, { useState } from "react";
import Logo from "../commonComponents/Logo";
import { IoCallSharp } from "react-icons/io5";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logoutHandle = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("breadcrumb");
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
    <div className="flex items-center justify-between border border-b-2 px-5 py-3">
      <Logo color="#00876A"/>

      <form class="w-[50%]">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium  sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-transparent focus:ring-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>

      <div className="relative">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 border px-2 py-1"
          type="button"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 me-2 rounded-full border"
            src="https://cdn.dribbble.com/users/3305260/screenshots/6628643/order-_fo59bc14fe01.jpg"
            alt="user photo"
          />
          <span className="capitalize">username</span>
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div
            id="dropdownAvatarName"
            className="absolute w-[300px] right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg "
          >
            <div className="p-4">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full border"
                  src="https://cdn.dribbble.com/users/3305260/screenshots/6628643/order-_fo59bc14fe01.jpg"
                />
                <div>
                  <p className="text-base font-semibold capitalize">username</p>
                  <p className="text-sm font-normal text-gray-500">email</p>
                </div>
              </div>
              <div className="mt-3 flex gap-5">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                  Company Name:
                </p>
                <p className="text-sm font-semibold uppercase">companyName</p>
              </div>
              <hr className="my-3" />
              <div className="flex items-center justify-center">
                <button
                  className="w-3/4 px-4 py-2 text-sm font-medium text-white bg-[#00876A] rounded-md hover:bg-[#00876A]"
                  onClick={logoutHandle}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="flex gap-2 items-center justify-end px-10 py-2">
    <IoCallSharp className="text-[#00876a]" />
    <p className="text-[13px] font-semibold">+1 (702) 648-5873</p>
    </div>
    
    </div>
  );
};

export default NavBar;
