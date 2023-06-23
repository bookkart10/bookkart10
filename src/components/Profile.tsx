"use client";

import { useState, useCallback, useEffect } from "react";
import Headingtext from "./Headingtext";
import { IoIosArrowBack } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { user } from "@prisma/client";
import { SupaClient } from "../../utils/supabase";
import Button from "./Button";

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
  const session = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<user | null>();

  const fetchUserProfile = useCallback(async () => {
    const res = await SupaClient.from("user")
      .select("*")
      .eq("id", session.data?.user?.id)
      .single();
    setProfile(res.data);
  }, []);
  
  useEffect(()=>{
    fetchUserProfile();
  },[])

  return (
    <>
      <div className="my-6 mx-4 flex flex-row ...  pr-96  ">
        <IoIosArrowBack onClick={() => router.back()} size={25} />
        <Headingtext>Profile</Headingtext>
      </div>
      <div className="grid justify-items-center border-2 h-fit p-10 r bg-[#FFF1F1] shadow-xl rounded-xl  my-6 ml-60 mr-60 gap-x-6">
        <div>
          <img
            className="w-32 h-32 rounded-full hover:opacity-80 "
            src={
              session.data?.user?.image ??
              "https://static.vecteezy.com/system/resources/thumbnails/006/541/188/small/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
            }
            alt="Rounded avatar"
          ></img>
        </div>
        <h1 className="text-black text-3xl font-bold mb-4">
          {profile?.username}
        </h1>
        <hr className="text-black mb-4" />
        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">Email:</span> {profile?.mail_id}
        </p>

        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">
            Address:{"Anekal, Banglore 562107"}
          </span>{" "}
          {}
        </p>

        <p className="text-gray-600 mb-2 text-lg">
          <span className="font-semibold">Phone:{profile?.ph_no}</span>
        </p>
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
    </>
  );
};

export default MyProfile;
