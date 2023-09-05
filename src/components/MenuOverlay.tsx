import React from 'react'
import Link from 'next/link'
import axios from "axios";
import { useRouter } from "next/navigation";

export const MenuOverlay = () => {
    const router = useRouter();
    const logOut = async () => {
        await axios.get("/api/users/logout");
        router.push("/signup");
      };
  return (
    <ul className="absolute left-0 min-h-screen w-[100vw] z-20 backdrop-blur-lg">
    <li>
      <Link href="/" className="text-white hover:text-blue-200 text-[24px] mb-6 flex justify-center items-center mt-3">
        Home
      </Link>
    </li>
    <li>
      <Link href="/" className="text-white hover:text-blue-200 text-[24px] mb-6 flex justify-center items-center mt-3">
        Courses
      </Link>
    </li>
    <li>
      <Link href="/" className="text-white hover:text-blue-200 text-[24px] mb-6 flex justify-center items-center mt-3">
        Contact
      </Link>
    </li>
    <li  className="text-white hover:text-blue-200 text-[26px] mb-6 flex justify-center items-center mt-3 ">
      <input
        type="button"
        onClick={logOut}
        value="Log Out"
      />
    </li>
  </ul>
  )
}

export default MenuOverlay