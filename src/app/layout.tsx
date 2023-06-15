"use client"
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import "../styles/globals.css"
import { fetchIntialreadlist } from "../../store/readlist.slice";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {

  
    return (
      <html lang="en">
        <body className="h-[100vh] w-[100vw] overflow-x-scroll"><Providers> <Navbar/><main>{children}</main></Providers>
        <footer><Footer/></footer>
        </body>
      </html>
    );
  }