import BookComponent from "@/components/BookComponent";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../store";
import { BooksSelector } from "../../../store/books.slice";
export default function SearchBookPage() {
  const query = useSearchParams().get("q");
  const books = useAppSelector((state) =>
    BooksSelector.selectAll(state).filter((book) => book.book_name == query)
  );

  return (
    <div>
      <div className="p-10">
        <h1 className="font-semibold text-2xl ">
          Search result for <b>{query}</b>
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 px-10 pb-10">
        {books.length > 0 ? (
          books.map((book) => <BookComponent key={book.book_id} feed={book} />)
        ) : (
          <h1>No result found !</h1>
        )}
      </div>
    </div>
  );
}
