"use client";
import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import Slideshow from "@/components/Slideshow";
import { useAppSelector } from "../../../store";
import { BooksSelector, MyBooksSelector } from "../../../store/books.slice";

export default function Home() {
  const books = useAppSelector(BooksSelector.selectAll);
  const MyBooks = useAppSelector(MyBooksSelector.selectAll);

  return (
    <div className="p-5 w-full">
      <Slideshow />
      {MyBooks.length > 0 && (
        <>
          <div className="my-6 mx-4 flex flex-row">
            <Headingtext>My Books</Headingtext>
          </div>
          <div className="grid grid-cols-5 gap-5 pb-10 px-5">
            {MyBooks.map((book) => (
              <BookComponent key={book.book_id} feed={book} />
            ))}
          </div>
        </>
      )}
      <div className="my-6 mx-4 flex flex-row">
        <Headingtext>Popular Books</Headingtext>
      </div>
      <div className="grid grid-cols-5 gap-5 pb-10 px-5">
        {books.length>0 && books.map((book) => (
          <BookComponent key={book.book_id} feed={book} />
        ))}
      </div>
    </div>
  );
}
