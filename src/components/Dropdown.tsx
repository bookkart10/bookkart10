import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DropdownComponent() {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-[#424242] bg-[#FDFDFD] border rounded-md shadow-sm outline-none appearance-none focus:border-[#424242]">
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
        <RiArrowDropDownLine size={28} />
      </select>
      
    </div>
  );
}
