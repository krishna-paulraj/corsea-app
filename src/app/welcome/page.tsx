"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const logOut = async () => {
    await axios.get("/api/users/logout");
    router.push("/signup");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <h1 className="text-xl">Welcome Page</h1>
      <button
        className="bg-slate-500 text-white p-2 rounded-md"
        onClick={logOut}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}
