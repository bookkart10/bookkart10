import BookComponent from "@/components/BookComponent";
import Button from "@/components/Button";
import Headingtext from "@/components/Headingtext";
import Navtext from "@/components/Navtext";
import Slideshow from "@/components/Slideshow";
export default function Page() {
  return (
    <div>
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

      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Popular Books</Headingtext>
      </div>
      <div className="flex gap-8">
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Newly Released</Headingtext>
      </div>
      <div className="flex gap-8">
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Reader’s Choice</Headingtext>
      </div>
      <div className="flex gap-8">
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <Headingtext>Book Sets</Headingtext>
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
  );
}
