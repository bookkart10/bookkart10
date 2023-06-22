"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useAppSelector } from "../../../../../store";
import { BooksSelector } from "../../../../../store/books.slice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { SupaClient } from "../../../../../utils/supabase";

export default function ViewBook() {
  const bookId = useParams().bookId;
  const router = useRouter();
  const book = useAppSelector((state) =>
    BooksSelector.selectById(state, bookId)
  );

  if (!book)
    return (
      <div className="h-screen bg-pink-50/80 w-screen flex items-center justify-center">
        <div className="w-3/4 h-4/5 rounded-lg shadow-lg bg-slate-200 animate-pulse"></div>
      </div>
    );

  return (
    <div className="h-screen bg-pink-50/80 w-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 pt-0 w-3/4">
        <div className="py-6">
          <AiOutlineArrowLeft
            onClick={() => router.back()}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-6">
          <div className="h-[480px] w-[380px] relative overflow-hidden rounded-lg">
            <Image
              src={
                book.image.startsWith("p/")
                  ? SupaClient.storage.from("posters").getPublicUrl(book.image)
                      .data.publicUrl
                  : book.image ?? faker.image.abstract(480, 600, true)
              }
              alt="product"
              fill
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-slate-900">
              {book?.book_name}
            </h1>
            <div className="block space-x-2">
              <span className="bg-rose-400 text-white rounded-full p-2 py-1 text-sm w-fit capitalize">
                {book?.language}
              </span>
              <span className="bg-rose-400 text-white rounded-full p-2 py-1 text-sm w-fit capitalize">
                {book?.book_type}
              </span>
              <span className="bg-rose-400 text-white rounded-full p-2 py-1 text-sm w-fit capitalize">
                {book?.available_for}
              </span>
            </div>
            <p className="text-md text-slate-700">{book?.description}</p>
            <div className="block space-x-2">
              {book?.categories?.map((name) => (
                <span
                  key={name}
                  className="bg-rose-200 text-rose-600 rounded-full p-2 py-1 text-sm w-fit capitalize"
                >
                  {name}
                </span>
              ))}
              <div className="flex gap-2 py-4">
                <div className="h-10 w-10 relative overflow-hidden rounded-full">
                  <Image
                    src={book?.user.profile_image ?? faker.image.avatar()}
                    fill
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-md text-slate-800">
                    {book?.user.username}
                  </h3>
                  <span className="text-sm text-slate-700">
                    {book?.user.ph_no}
                  </span>
                  <span className="text-sm text-slate-700">
                    {faker.address.cityName()},{faker.address.state()}
                  </span>
                </div>
              </div>
              <Button className="w-full py-2">Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
