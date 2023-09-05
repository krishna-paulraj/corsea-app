"use client";
import MenuOverlay from "./MenuOverlay";
import { HiSortAscending } from "react-icons/hi";
import { useState } from "react";
import { HiOutlineSortDescending } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
export default function Navbar() {
  const router = useRouter();

  const logOut = async () => {
    await axios.get("/api/users/logout");
    router.push("/signup");
  };
  const [toggle,setToggle]=useState(false)
  return (
    <nav className=" bg-black/80 p-5 sticky top-0">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}

        <Link href="/welcome" className="text-white text-xl font-semibold">
          Coursea
        </Link>

         {/* Navigation links */}
         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <Link href="/" className="text-white hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-blue-200">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-blue-200">
              Contact
            </Link>
          </li>
          <li>
            <input
              type="button"
              onClick={logOut}
              className="text-white bg-black p-2 rounded-md hover:text-blue-200"
              value="Log Out"
            />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="hidden max-lg:block">
          {!toggle ? <HiOutlineSortDescending onClick={()=>setToggle(!toggle)} className=" text-[30px] cursor-pointer"/>
          :<HiSortAscending onClick={()=>setToggle(!toggle)} className="text-[30px] cursor-pointer" />  }
          {toggle? <MenuOverlay />:null}
        </div>
      </div>
    </nav>
  );
}
