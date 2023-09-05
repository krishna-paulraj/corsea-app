"use client";
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
  return (
    <nav className=" bg-black/80 p-5 sticky top-0">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}

        <Link href="/welcome" className="text-white text-xl font-semibold">
          Coursea
        </Link>

        {/* Mobile Menu Button */}
        <div className="block sm:hidden">
          <button className="text-white hover:text-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className="hidden sm:flex space-x-4 items-center">
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
      </div>
    </nav>
  );
}
