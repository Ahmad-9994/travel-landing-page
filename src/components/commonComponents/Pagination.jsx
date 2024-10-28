import React from 'react';
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalPages = 5, onPageChange, currentPage, setCurrentPage,setLimit }) => {

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      handleClick(currentPage + 1);
    }
  };
  
  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
  };

  return (
    <div className="flex items-center space-x-4  justify-end">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={handlePrevious}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white border-e-0 border border-[#00876A]  rounded-s-lg hover:bg-gray-100 bg-[#00876A] ${
                currentPage === 1 ? 'cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => handleClick(page)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#00876A] hover:bg-gray-100  ${
                  currentPage === page
                    ? 'text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 bg-white'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNext}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#00876A] text-white rounded-e-lg hover:bg-gray-100 bg-[#00876A]  ${
                currentPage === totalPages ? 'cursor-not-allowed' : ''
              }`}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Pagination;
