"use client"
import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import Bookkartlogo from "../../public/Bookkartlogo.jpg";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const session=useSession()
  return (
    <>
      <div className=" h-fit bg-[#FFF1F1] w-2/6 block justify-center border-2 rounded-xl px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:min-w-full sm:max-w-sm ">
          <pre>{JSON.stringify(session)}</pre>
          <div className="inset-x-28 flex justify-center">
            <Image
              src="/Bookkartlogo.jpg"
              alt="Logo"
              width={157}
              height={118}
            />
          </div>
          <h2 className="mt-1 text-center text-lg pb-1 font-medium leading-10 tracking-tight text-[#000000]">
            LOGIN
          </h2>
          
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
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
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm flex justify-end w-full">
              <a href="#" className="font-medium  text-[#FF6D6D] ">
                Forgot password?
              </a>
            </div>
            <div>
              <Button className="" onClick={()=>{
               signIn("credentials",{
                userId:"Kyleigh_Tromp43@yahoo.com",password:"password",for:"sign-in"
               })
              }} fullwidth intent={"primary"}>
                LOGIN
              </Button>
            </div>
            <div>
              <Button className="" fullwidth intent={"secondary"}>
                Sign up for an account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
