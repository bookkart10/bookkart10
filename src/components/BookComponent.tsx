
import React from "react";
import { RiBook2Line } from "react-icons/ri";
import Button from "./Button";

const BookComponent = () => {
  return (
      <div className=" border-2 h-80 p-4   bg-[#FFF1F1] shadow-xl rounded-xl  ">
        <img
          src="https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UF1000,1000_QL80_.jpg"
          alt="Image"
          className="h-52 w-48 rounded-xl"
        />
        <div>
        <label className="text-center font-medium">A Game of Thrones</label>
        </div>
        <label className="text-center font-normal">Rs 949/-</label>
        <Button className="h-6 text-sm rounded-none" fullwidth intent={"primary"}>
          Add to Cart
        </Button>
      </div>

      
  );
};

export default BookComponent;
