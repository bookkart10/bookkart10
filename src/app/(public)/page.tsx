"use client";
import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import Slideshow from "@/components/Slideshow";
import { useAppSelector } from "../../../store";
import { BooksSelector } from "../../../store/books.slice";
export default function Home() {
  const books = useAppSelector(BooksSelector.selectAll);
  return (
    <div className="p-5 w-full">
      <Slideshow />

      <div className="my-6 mx-4 flex flex-row">
        <Headingtext>Popular Books</Headingtext>
      </div>
      <div className="grid grid-cols-5 gap-5 pb-10 px-5">
        {books.map((book) => (
          <BookComponent feed={book} />
        ))}
      </div>
    </div>
  );
}
