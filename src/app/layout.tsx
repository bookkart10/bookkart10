"use client"
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import "../styles/globals.css"
import { fetchIntialreadlist } from "../../store/readlist.slice";
import Providers from "./providers";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {

  
    return (
      <html lang="en">
        <body><Providers>{children}</Providers></body>
      </html>
    );
  }