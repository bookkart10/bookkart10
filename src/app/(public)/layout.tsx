"use client";

import { useAppDispatch } from "../../../hooks";
import { booksList } from "../../../store/books.slice";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();
  dispatch(booksList());
  return <div>{children}</div>;
}
