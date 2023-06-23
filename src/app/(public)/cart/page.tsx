"use client";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../../../store";
import { CartSelector } from "../../../../store/cart.slice";
import BookComponent from "@/components/BookComponent";

export default function ViewBook() {
  const router = useRouter();
  const cartbooks = useAppSelector((state) => CartSelector.selectAll(state));

  if (!cartbooks)
    return (
      <div className="h-screen bg-pink-50/80 w-screen flex items-center justify-center">
        <div className="w-3/4 h-4/5 rounded-lg shadow-lg bg-slate-200 animate-pulse"></div>
      </div>
    );

  return (
    <div className="h-screen bg-pink-50/80 w-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 pt-0 w-5/6">
        <div className="py-6 flex items-center gap-3">
          <AiOutlineArrowLeft
            onClick={() => router.back()}
            className="text-2xl cursor-pointer"
          />
          <h1 className="text-2xl font-semibold">Your Cart</h1>
        </div>
        <div className="grid grid-cols-4 gap-5 pb-10 px-5">
          {cartbooks?.map((book) => (
            <BookComponent key={book.book_id} feed={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
