import React from "react";
import Searchbar from "./Searchbar";
import Navtext from "./Navtext";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#FFF1F1] text-[#424242] sticky top-0 z-40 px-5 py-3 w-full flex justify-between items-center  h-16 drop-shadow-lg">
      <ul className="flex items-center justify-between w-full text-sm space-x-10 text-[#424242]">
        <div className="py-4 px-4">
          <Image src="/Bookkartlogo.jpg" alt="Logo" width={157} height={118} />
        </div>

        <div>
          <Searchbar />
        </div>
        <div className="flex items-center space-x-10">
          <Navtext isActive>Home</Navtext>
          <Navtext>Events</Navtext>
          <Navtext>Book Store</Navtext>
          <Link href={"/postbook"}>
            <Button>Sell</Button>
          </Link>
          <MdAccountCircle size={42} className="text-slate-500 text-lg" />
        </div>
      </ul>
    </nav>
  );
}
