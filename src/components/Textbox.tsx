import React from "react";
export default function Textbox({children}:{children:string}) {
  return (
    <div>
        <a className="group text-[#424242]">
  <span className="box-border h-8 md:h-full border-2 p-0.5 border-gray-700">
    {children} Text Box
  </span>
</a>
    </div>
  );
}
