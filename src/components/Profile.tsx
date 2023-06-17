import React from "react";
import { faker } from "@faker-js/faker";
import Headingtext from "./Headingtext";
import { IoIosArrowBack } from "react-icons/io";

interface ProfileDetails {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const MyProfile: React.FC<ProfileDetails> = ({
  name,
  address,
  email,
  phone,
}) => {
  return (
    <>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <IoIosArrowBack size={25} />
        <Headingtext>Profile</Headingtext>
      </div>
      <div className="grid justify-items-center border-2 h-fit p-10 r bg-[#FFF1F1] shadow-xl rounded-xl  my-6 ml-60 mr-60 gap-x-6">
        <div>
          <img
            className="w-32 h-32 rounded-full hover:opacity-80 "
            src="https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
            alt="Rounded avatar"
          ></img>
        </div>
        <h1 className="text-black text-3xl font-bold mb-4">Glen Verlice</h1>
        <hr className="text-black mb-4" />
        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">Email:</span> {email}
        </p>

        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">Address:</span> {address}
        </p>

        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <div className="flex">
          <div className="p-2">
            <p className="text-gray-600 mb-2 font-semibold text-lg">
              <label>Favourite Books:</label>
            </p>
          </div>
          <div className="p-2">
            <img
              src="https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UF1000,1000_QL80_.jpg"
              alt="Image"
              className="h-28 w-20 rounded-xl border-solid border-2 border-gray-700"
            />
          </div>
          <div className="p-2">
            <img
              src="https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/write-a-new-name-in-the-book-of-life_FrontImage_415.jpg"
              alt="Image"
              className="h-28 w-20 rounded-xl border-solid border-2 border-gray-700"
            />
          </div>
          <div className="p-2 ">
            <img
              src="https://toppsta.com/images/covers/4/9/0/6/9780141324906.webp?t=1644290789"
              alt="Image"
              className="h-28 w-20 rounded-xl border-solid border-2 border-gray-700 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
