import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import Slideshow from "@/components/Slideshow";
export default function Page() {
  return (
    <div className="p-5 w-full">
      <Slideshow />

      <div className="my-6 mx-4 flex flex-row">
        <Headingtext>Popular Books</Headingtext>
      </div>
      <div className="grid grid-cols-5 gap-5 pb-10">
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
