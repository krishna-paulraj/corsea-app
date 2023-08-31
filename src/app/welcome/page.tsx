"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();

  const [data, setData] = useState();

  const logOut = async () => {
    await axios.get("/api/users/logout");
    router.push("/signup");
  };

  const getData = async () => {
    const res: any = await axios.get("/api/users/data");
    setData(res.data.data.name);
  };

  return (
    <main className="h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl">Welcome Page</h1>
        <button
          className="bg-slate-500 text-white p-2 rounded-md"
          onClick={logOut}
          type="button"
        >
          Logout
        </button>
        <button onClick={getData}>Get Data</button>
        <h1 className="text-white">{data}</h1>
      </div>
    </main>
  );
}
