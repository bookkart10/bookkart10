import Link from "next/link";
import React from "react";

export default function Navtext({
  children,
  href,
  isActive
}: {
  children: string;
  href?: string;
  isActive?:boolean
}) {
  return (
    <Link
      className="group text-[#424242] hover:text-[#111111] transition-all duration-100 ease-in-out"
      href={href ?? "#"}
    >
      <span className={"bg-left-bottom bg-gradient-to-r from-[#FF6D6D] to-[#FF6D6D]  transition-all duration-200 ease-out text-lg "+(isActive ? "bg-[length:100%_1.5px] bg-no-repeat font-bold":"bg-[length:0%_1.5px] bg-no-repeat group-hover:bg-[length:100%_1.5px]")}>
        {children}
      </span>
    </Link>
  );
}
