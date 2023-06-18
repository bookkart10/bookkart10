import React from "react";
import Button from "./Button";
import { IoHeart } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";

const BookComponent = () => {
  return (
    <div className="border overflow-hidden bg-[#FFF1F1] hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md">
      <img
        src="https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UF1000,1000_QL80_.jpg"
        alt="Image"
        className="h-72 w-64"
      />
      <div className="flex flex-col p-3 gap-1">
        <div className="flex items-center justify-between">
          <label className="text-center font-medium text-lg">
            A Game of Thrones
          </label>
          <AiOutlineHeart className="text-xl"/>
        </div>
        <label className="font-normal text-md">Rs 949/-</label>
        <Button
          className="py-2 text-sm rounded-sm"
          fullwidth
          intent={"primary"}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default BookComponent;
