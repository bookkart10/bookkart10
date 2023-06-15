import React from 'react';

export default function Headingtext({children}:{children:string}){
  return (
   
  <span className="underline decoration-red-400 underline-offset-4 font-semibold text-xl">
    {children}
  </span>
  )
} 