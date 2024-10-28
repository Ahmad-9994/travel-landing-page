import React from "react";
import DetailCard from "./DetailCard";
import Pagination from "../commonComponents/Pagination";
import TrendingAttraction from "../commonComponents/TrendingAttraction";
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
const list = [1, 2, 3, 4, 5, 5, 2, 3, 4, 5, 5,2];
const SearchResultList = () => {
  return (
    <div className="p-10 space-y-5">


   <h1 className="text-3xl font-bold">Explor Pakistan</h1>
   <div className="flex items-center justify-between p-4">
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 border border-black rounded-full text-black font-semibold space-x-2">
          <FaCalendarAlt className="text-sm" />
          <span>Select Dates</span>
        </button>
        <button className="flex items-center px-4 py-2 border border-black rounded-full text-black font-semibold space-x-2">
          <FaFilter className="text-sm" />
          <span>All filters</span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-black font-semibold">232 results</span>
        <button className="flex items-center px-4 py-2 border border-black rounded-full text-black font-semibold space-x-2">
          <span>Sort by: <span className="font-bold">Featured</span></span>
          <FiChevronDown />
        </button>
      </div>
    </div>
    <div className="flex flex-wrap justify-between  gap-y-6 ">
      {list.map((card) => {
        return <DetailCard />;
      })}
    </div>
    <Pagination />
    <TrendingAttraction />
     </div>
  );
};

export default SearchResultList;
