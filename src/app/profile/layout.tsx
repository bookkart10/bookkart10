import { getServerSession } from "next-auth/next";
import React from "react";
import { NextAuthOptions } from "../../../utils/nextAuth";
import { redirect } from "next/navigation";

interface props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: props) {
  const session = await getServerSession(NextAuthOptions);

  if (!session?.user?.id) redirect("/");
  return <div>{children}</div>;
}
