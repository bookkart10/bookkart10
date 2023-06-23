import React from "react";
import Button from "./Button";
import { IoHeart } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { bookProps } from "../../store/books.slice";
import Image from "next/image";
import Link from "next/link";
import { SupaClient } from "../../utils/supabase";
import { useAppDispatch } from "../../hooks";
import { CartSelector, addToCart, removeOne } from "../../store/cart.slice";
import { useAppSelector } from "../../store";

const BookComponent = ({ feed }: { feed: bookProps }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(CartSelector.selectIds);
  const isALerady = cart.includes(feed.book_id);

  return (
    <div className="border overflow-hidden bg-[#FFF1F1] hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md">
      <Link href={`/v/${feed.book_id}`}>
        <div className="h-72 w-64 relative">
          <Image
            src={
              feed.image.startsWith("p/")
                ? SupaClient.storage.from("posters").getPublicUrl(feed.image)
                    .data.publicUrl
                : feed.image ??
                  "https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UF1000,1000_QL80_.jpg"
            }
            alt="Image"
            fill
          />
        </div>
        <div className="flex flex-col p-3 gap-1">
          <div className="flex items-center">
            <label className="text-center font-medium text-lg">
              {feed.book_name}
            </label>
          </div>
          <label className="font-normal text-md">Rs {feed.price}/-</label>
        </div>
      </Link>
      <div className="w-full p-3">
        {isALerady ? (
          <Button
            onClick={() => {
              dispatch(removeOne(feed.book_id));
              alert("Removed");
            }}
            className="py-2 text-sm rounded-sm"
            fullwidth
            intent={"secondary"}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(addToCart(feed));
              alert("This book added to cart");
            }}
            className="py-2 text-sm rounded-sm"
            fullwidth
            intent={"primary"}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookComponent;
