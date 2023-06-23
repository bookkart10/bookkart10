"use client";
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Navtext from "./Navtext";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "../../store";
import { CartSelector } from "../../store/cart.slice";

export default function Navbar() {
  const session = useSession();
  const cartTotal = useAppSelector(CartSelector.selectTotal);
  console.log(session);
  return (
    <nav className="bg-white text-[#424242] sticky top-0 z-40 px-5 py-3 w-full flex justify-between items-center  h-16 drop-shadow-lg">
      <ul className="flex items-center justify-between w-full text-sm space-x-10 text-[#424242]">
        <div className="py-4 px-4">
          <Image src="/Bookkartlogo.jpg" alt="Logo" width={140} height={60} />
        </div>

        <div>
          <Searchbar />
        </div>
        <div className="flex items-center space-x-10 px-5">
          <Navtext isActive>Home</Navtext>
          <Link href={"/events"}>
            <Navtext>Events</Navtext>
          </Link>
          <Link href={"/bookstore"}>
            <Navtext>Book Store</Navtext>
          </Link>
          <Link href={session.data?.user ? "/postbook" : "/signin"}>
            <Button>Sell</Button>
          </Link>
          <Link
            className="relative"
            href={session.data?.user ? "/cart" : "/signin"}
          >
            <AiOutlineShoppingCart className="text-3xl" />{" "}
            <span className="absolute bg-rose-600 text-white text-sm h-4 flex items-center justify-center w-4 rounded-full -top-2 -right-2">
              {cartTotal}
            </span>
          </Link>
          {session.data?.user?.id ? (
            <Link href={"/profile"}>
              <img
                src={
                  session.data?.user?.image ??
                  "https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
                }
                alt="rounded avatar"
                className="h-10 w-10 rounded-full"
              />
            </Link>
          ) : (
            <Link href={"/signin"}>
              <Button>Signin</Button>
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
}
