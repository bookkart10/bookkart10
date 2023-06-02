import React from "react";
import Searchbar from "./Searchbar";
import Navtext from "./Navtext";
import { IoCart, IoNotifications } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import Image, { StaticImageData } from "next/image";
import Bookkartlogo from "../../public/Images/Bookkartlogo.jpg";


interface LogoProps {
  Logo: StaticImageData;
}

export default function navbar({ Logo }: LogoProps) {
  return (
    <nav className="bg-[#FFF1F1] text-[#424242] flex justify-between items-center py-3 px-5 h-12 drop-shadow-lg">
      <ul className="flex items-center text-sm space-x-10 text-[#424242]">
        <div className="py-4 px-4">
          <Image src={Bookkartlogo} alt="Logo" width={157} height={118} />
        </div>
        <li>
        <Navtext>Home</Navtext>
        </li>
        <li>
        <Navtext>Events</Navtext>
        </li>
        <li>
        <Navtext>Book Store</Navtext>
        </li>
        {Searchbar()}
        <IoCart size={28} color="[#424242]" />
        <ImBooks size={28} color="[#424242]" />
        <IoNotifications size={28} color="[#424242]" />
        <MdAccountCircle size={28} color="[#424242]" />

      </ul>
    </nav>
  );
}
