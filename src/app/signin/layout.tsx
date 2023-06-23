import { getServerSession } from "next-auth/next";
import React from "react";
import { NextAuthOptions } from "../../../utils/nextAuth";
import { redirect } from "next/navigation";

interface props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: props) {
  const session = await getServerSession(NextAuthOptions);

  if (session?.user?.id) redirect("/");

  return (
    <main className="container h-screen bg-cover bg-no-repeat max-w-screen-2xl">
      <section className="flex justify-end flex-1 bg-[url('/loginbg.png')] bg-contain bg-no-repeat h-full w-full  items-center px-32 ">
        {children}
      </section>
    </main>
  );
}
