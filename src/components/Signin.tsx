import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import Bookkartlogo from "../../public/Images/Bookkartlogo.jpg";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Signin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

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
            Sign In
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="Enter password"
                  placeholder="Enter password"
                  name="Enter password"
                  type="password"
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
              <Button
                onClick={() =>
                  signIn("credentials", {
                    userId,
                    password,
                    redirect:true
                  })
                }
                className=""
                fullwidth
                intent={"primary"}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
