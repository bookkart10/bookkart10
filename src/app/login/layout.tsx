import React from 'react'


interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {

  
    return (
        <main className="container h-screen bg-cover bg-no-repeat max-w-screen-2xl">
        <section className="flex justify-end flex-1 bg-[url('/loginbg.png')] bg-contain bg-no-repeat h-full w-full  items-center px-32 ">{children}</section></main>
    );
  }