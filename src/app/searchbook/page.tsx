import BookComponent from "@/components/BookComponent";
export default function SearchBookPage() {
  return (
    <div>
      <div className="p-10">
        <h1 className="font-semibold text-2xl ">
          Search result for book series
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 px-10 pb-10">
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
    </div>
  );
}
