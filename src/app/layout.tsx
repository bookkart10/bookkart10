"use client";
import "../styles/globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { store } from "../../store";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
