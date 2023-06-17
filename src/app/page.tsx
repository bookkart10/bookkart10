"use client"
import Hovertext from "@/components/Hovertext";
import { useAppDispatch } from "../../hooks";
import { fetchIntialreadlist, postreadlist } from "../../store/readlist.slice";
import { useEffect } from "react";
import { fetchIntialbookavail } from "../../store/bookavail.slice";
import { bookFilter, bookfilter, listBooksHistory } from "../../store/bookfilters.slice";
import { available_for } from "@prisma/client";

export default function Page() {
  const dispatch=useAppDispatch()
  useEffect(()=>{dispatch(fetchIntialreadlist())},[])
  useEffect(()=>{dispatch(postreadlist())},[])
  useEffect(()=>{dispatch(fetchIntialreadlist())},[])
  useEffect(()=>{dispatch(fetchIntialbookavail())},[])
 

    return (
      <div> 
        <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
        <Hovertext />
    </div>
    )
  }
  
  