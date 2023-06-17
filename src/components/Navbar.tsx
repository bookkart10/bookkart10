import React from "react";
import Searchbar from "./Searchbar";
import Navtext from "./Navtext";
import { IoCart, IoNotifications } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";



export default function navbar() {
  return (
    <nav className="bg-[#FFF1F1] text-[#424242] sticky top-0 z-40 px-5 py-3 w-full flex justify-between items-center  h-16 drop-shadow-lg">
      <ul className="flex items-center justify-between w-full text-sm space-x-10 text-[#424242]">
        <div className="py-4 px-4">
          <Image src="/Bookkartlogo.jpg" alt="Logo" width={157} height={118} />
        </div>
        <div className="flex justify-items-center space-x-16">
        <Navtext>Home</Navtext>
        <Navtext>Events</Navtext>
        <Navtext>Book Store</Navtext>
        </div>
        <div>
        <Searchbar/>
        </div>
        <div className="flex justify-items-center space-x-20 pr-2">
        <IoCart size={28} color="[#424242]" />
        <ImBooks size={28} color="[#424242]" />
        <IoNotifications size={28} color="[#424242]" />
        <MdAccountCircle size={28} color="[#424242]" />
        </div>
        </ul>
    </nav>
  );
}
