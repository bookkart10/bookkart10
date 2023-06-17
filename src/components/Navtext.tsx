import React from 'react'

export default function Navtext({children}:{children:string}){
  return (
    <a className="group text-[#424242] hover:text-[#111111] transition-all duration-100 ease-in-out" href="#">
  <span className="bg-left-bottom bg-gradient-to-r from-[#FF6D6D] to-[#FF6D6D] bg-[length:0%_1.5px] bg-no-repeat group-hover:bg-[length:100%_1.5px] transition-all duration-200 ease-out">
    {children}
  </span>
</a>
  )
} 