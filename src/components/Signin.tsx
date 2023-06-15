import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import Bookkartlogo from "../../public/Images/Bookkartlogo.jpg";

export default function Signin() {
  return (
    <>
      <div className=" h-fit bg-[#FFF1F1] w-2/6 block justify-center border-2 rounded-xl px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:min-w-full sm:max-w-sm ">
          <div className="inset-x-28 flex justify-center">
            <Image
              src="/Bookkartlogo.jpg"
              alt="Logo"
              width={157}
              height={118}
            />
          </div>
          <h2 className=" mt-1 text-center text-lg pb-1 font-medium leading-10 tracking-tight text-[#000000] fo">
            Create your account
          </h2>
          
        </div>

        <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <input
                  id="Username"
                  placeholder="Username"
                  name="Username"
                  type="Username"
                  autoComplete="current-Username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  type="Email"
                  autoComplete="Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 focus:ring-1 focus:ring-inset placeholder:text-opacity-60 
                  focus:ring-[#FF6D6D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Confirm password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <input
                  id="Enter password"
                  placeholder="Enter password"
                  name="Enter password"
                  type="Enter password"
                  autoComplete="current-Enter password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Confirm password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              
            </div>

            <div className="text-sm flex justify-end w-full">
              <a href="#" className="font-medium  text-[#000000] ">
              By continuing, you agree to BookKart Terms of use & policy.
              </a>
            </div>

            <div>
              <Button className="" fullwidth intent={"primary"}>
                Continue
              </Button>
            </div>

            <div className="text-sm  w-full">
              <a href="#" className="font-medium  text-[#000000] ">
              Already have an account?
              </a>
              <a href="#" className="font-medium  text-[#ff5a5a] ">
               login
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
