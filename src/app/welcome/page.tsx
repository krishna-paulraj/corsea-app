"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
export default function Page() {
  const router = useRouter();
  const [data, setData] = useState("Hello");

  const logOut = async () => {
    await axios.get("/api/users/logout");
    router.push("/signup");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/users/data");
        setData("Hello " + res.data.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl">Welcome Page</h1>
        <h1 className="text-white text-xl">{data}</h1>
        <button
          className="bg-slate-500 text-white p-2 rounded-md hover:bg-slate-400"
          onClick={logOut}
          type="button"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
