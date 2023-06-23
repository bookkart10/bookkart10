"use client";

import { useSession } from "next-auth/react";
import { useAppDispatch } from "../../../hooks";
import { booksList, mybookList } from "../../../store/books.slice";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();
  const session = useSession();

  if(session.data?.user){
    dispatch(booksList(session.data.user.id));
    dispatch(mybookList(session.data.user.id));
  }
  return <div>{children}</div>;
}
