import BookComponent from "@/components/BookComponent";
import Headingtext from "@/components/Headingtext";
import { IoIosArrowBack } from "react-icons/io";
export default function Page() {
  return (
    <div>
      <div className="my-6 mx-4   ">
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25}/>
          <Headingtext>Education</Headingtext>
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
