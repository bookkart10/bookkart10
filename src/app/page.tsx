"use client"
import Hovertext from "@/components/Hovertext";
import { useAppDispatch } from "../../hooks";
import { fetchIntialreadlist, postreadlist } from "../../store/readlist.slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch=useAppDispatch()
  useEffect(()=>{dispatch(fetchIntialreadlist())},[])
  useEffect(()=>{dispatch(postreadlist())},[])
  useEffect(()=>{dispatch(fetchIntialreadlist())},[])

    return (
      <div> 
        <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
        <Hovertext />
    </div>
    )
  }
  
  