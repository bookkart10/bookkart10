import Button from "@/components/Button";
import Headingtext from "./Headingtext";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function EditPostbook() {
  return (
    <>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
          <IoIosArrowBack size={25}/>
          <Headingtext>Edit Post</Headingtext>
      </div>

      <div className=" border-2 h-fit p-10 flex justify-center items-center bg-[#FFF1F1] shadow-xl rounded-xl  my-6 ml-40 mr-40 gap-x-6">

       <div className= "border-2 w-60 h-60 rounded-lg flex justify-center items-center">
        <img src="https://prodimage.images-bn.com/pimages/9788173717802_p0_v2_s1200x630.jpg" />
       </div>
    
       <div>
        <div className="space-y-4 flex flex-col">
          <div className="flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap">Book Name</label>
            <input
              name="password"
              type="text"
              placeholder="Enter Book Name"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap">Author Name</label>
            <input
              name="password"
              type="text"
              placeholder="Enter author Name"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Publisher</label>
            <input
              name="password"
              type="text"
              placeholder="Enter publisher"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4" >Description</label>
            <input
              name="password"
              type="text"
              placeholder="Description of your book"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex flex-row ... flex-1">
            <label className="flex-1 px-4">Language</label>
            <input
              name="password"
              type="text"
              placeholder="Enter Language"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Category</label>
            <input
              name="password"
              type="text"
              placeholder="Enter your book category"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="relative flex-2 w-full lg:max-w-sm flex flex-row ... justify-between  ">
            <label className="flex-2 px-4 whitespace-nowrap"> Book Type</label>
            <select
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
              shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
              pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
              focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            >
              <option>NEW</option>
              <option>OLD</option>
            </select>
          </div>

          <div className="flex flex-row ... ">
            <label className="flex-1 px-4">Price</label>
            <input
              name="password"
              type="number"
              placeholder="Enter your book price"
              className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="relative w-full lg:max-w-sm flex flex-row ... ">
            <label className="flex-1 px-4 whitespace-nowrap"> Available for</label>
            
            <select
              className="block w-96 rounded-md border-0 py-1.5  text-gray-900 
              shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
              pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
              focus:ring-[#958F8F] sm:text-sm sm:leading-6"
            >
              <option>SELL</option>
              <option>RENT</option>
            </select>
          </div>
          </div> 
          <div className="flex mt-4 space-x-6 ">
          <div>
              <Button className="" fullwidth intent={"primary"}>
                Save
              </Button>
            </div>
          <div>
              <Button className="" fullwidth intent={"secondary"}>
                Cancel
              </Button>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
