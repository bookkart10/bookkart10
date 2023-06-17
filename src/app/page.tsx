import BookComponent from "@/components/BookComponent";
import Button from "@/components/Button";
import Headingtext from "@/components/Headingtext";
import Navtext from "@/components/Navtext";
import Slideshow from "@/components/Slideshow";
export default function Page() {
  return (
    <div className="px-5 w-full">
      <div className="flex">
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Category</Navtext>
          <Navtext>Best Seller Book</Navtext>
          <Navtext>Education</Navtext>
        </div>
        <div className="flex rowjustify-end p-4 space-x-96">
          <Button className="w-24 h-10" fullwidth intent={"primary"}>
            Sell
          </Button>
        </div>
      </div>

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

  