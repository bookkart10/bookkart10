import Headingtext from "@/components/Headingtext";
import Navtext from "@/components/Navtext";
import { IoIosArrowBack } from "react-icons/io";
export default function Page() {
  return (
    <div>
      <div className="my-6 mx-4   ">
        <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25} />
          <Headingtext>Category</Headingtext>
        </div>

        <div className="font-semibold text-xl p-4 ">Fiction</div>

        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Action and adventure</Navtext>
          <Navtext>Alternate history</Navtext>
          <Navtext>Anthology</Navtext>
          <Navtext>Children's</Navtext>
          <Navtext>Fairytale</Navtext>
          <Navtext>Fantasy</Navtext>
          <Navtext>Classic</Navtext>
          <Navtext>Comic book</Navtext>
          <Navtext>Crime</Navtext>
        </div>
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Drama</Navtext>
          <Navtext>Graphic novel</Navtext>
          <Navtext>Historical fiction</Navtext>
          <Navtext>Horror</Navtext>
          <Navtext>Mystery</Navtext>
          <Navtext>Picture book</Navtext>
          <Navtext>Coming-of-age</Navtext>
          <Navtext>Political thriller</Navtext>
          <Navtext>Romance</Navtext>
        </div>
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Science fiction</Navtext>
          <Navtext>Short story</Navtext>
          <Navtext>Suspense</Navtext>
          <Navtext>Thriller</Navtext>
          <Navtext>Western</Navtext>
          <Navtext>Poetry</Navtext>
          <Navtext>Young adult</Navtext>
        </div>

        <div className="font-semibold text-xl p-4 ">Non Fiction</div>

        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Art/architecture</Navtext>
          <Navtext>Autobiography</Navtext>
          <Navtext>Biography</Navtext>
          <Navtext>Business/economics</Navtext>
          <Navtext>Crafts/hobbies</Navtext>
          <Navtext>Cookbook</Navtext>
          <Navtext>Diary</Navtext>
          <Navtext>Dictionary</Navtext>
          <Navtext>Encyclopedia</Navtext>
        </div>
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Guide</Navtext>
          <Navtext>Health/fitness</Navtext>
          <Navtext>History</Navtext>
          <Navtext>Home and garden</Navtext>
          <Navtext>Humor</Navtext>
          <Navtext>Journal</Navtext>
          <Navtext>Philosophy</Navtext>
          <Navtext>Religion</Navtext>
          <Navtext>True crime</Navtext>
        </div>
        <div className="flex justify-items-center space-x-16 p-4">
          <Navtext>Textbooks</Navtext>
          <Navtext>Review</Navtext>
          <Navtext>Science</Navtext>
          <Navtext>Sports and leisure</Navtext>
          <Navtext>Self help</Navtext>
          <Navtext>Travel</Navtext>
        </div>
      </div>
    </div>
  );
}
