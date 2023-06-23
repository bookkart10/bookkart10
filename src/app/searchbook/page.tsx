"use client";
import BookComponent from "@/components/BookComponent";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../store";
import { BooksSelector } from "../../../store/books.slice";
import { shallowEqual } from "react-redux";

export default function SearchBookPage() {
  const query = useSearchParams().get("q");

  console.log(query);

  const books = useAppSelector(
      BooksSelector.selectAll,
    shallowEqual
  );

  const filteredBooks = books.filter((book) => {
    const regex = new RegExp(`${query}`,"i");
    return book.book_name.search(regex) > 0 ? false : true
  })

  return (
    <div className="min-h-screen h-fit w-screen">
      <div className="p-10">
        <h1 className="font-semibold text-2xl ">
          Search result for <b>{query}</b>
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 px-10 pb-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookComponent key={book.book_id} feed={book} />)
        ) : (
          <h1>No result found !</h1>
        )}
      </div>
    </div>
  );
}
