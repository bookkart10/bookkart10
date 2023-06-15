import BookComponent from "@/components/BookComponent";
import { IoFilter } from "react-icons/io5";
export default function Page() {
  return (
    <div>
      <div className="my-6 mx-4   ">
        <div className="font-semibold text-lg ">
          Search result for book series
        </div>
        <div className="font-semibold text-2xl flex flex-row-reverse  pr-3 ">
          Filter 
          <IoFilter size={24}/>
      </div>
      
    </div><div className="space-y-10">
        <div className="flex gap-8">
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
        </div>

        <div className="flex gap-8">
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
        </div>
        <div className="flex gap-8">
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
          <BookComponent />
        </div>
      </div>
    </div>
  );
}
