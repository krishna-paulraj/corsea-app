"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
export default function Page() {
  const [data, setData] = useState("Hello");

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
    <main className="flex flex-col justify-center items-center h-3/4 my-12 sm:my-0">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl">Welcome Page</h1>
        <h1 className="text-white text-xl">{data}</h1>

        <div className="flex flex-col gap-7 sm:flex-row">
          <Link href="/courses">
            <div className="flex justify-center items-center bg-slate-500/25 h-48 w-48 rounded-lg">
              Explore Courses
            </div>
          </Link>
          <Link href="/create-course">
            <div className="flex justify-center items-center bg-slate-500/25 h-48 w-48 rounded-lg">
              Create Own Course
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
