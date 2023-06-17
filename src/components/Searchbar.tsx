import React from "react";
export default function Searchbar() {
  return (
    <form className="max-w-sm px-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-[#858585] left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for Books, authors, publishers.."
          className="w-96 py-3 pl-12 pr-4 h-8 text-[#858585] border-solid border-[#FF6D6D] 
                  border rounded-md outline-none bg-[#FDFDFD] focus:bg-[#FDFDFD] focus:border-[#FF6D6D] 
                  focus:border-2"
        />
      </div>
    </form>
  );
}
