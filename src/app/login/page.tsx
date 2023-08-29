"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function page() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onLogin = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post("/api/users/login", user);
      console.log(res.data.error);
      res.data.error
        ? toast.error("Login Failed")
        : toast.success("Succesfully Logined");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <h1 className="text-2xl">Login</h1>
      <form onSubmit={onLogin} className="flex flex-col gap-5">
        Username:
        <input
          className="text-black rounded-md p-1"
          type="text"
          name="username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        Password:
        <input
          className="text-black rounded-md p-1"
          type="password"
          name="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <input
          type="submit"
          onClick={() => {
            setLoading(true);
          }}
          className={
            loading
              ? "bg-red-700 my-10 rounded-md p-1"
              : "bg-slate-500 my-10 rounded-md p-1"
          }
          value={loading ? "Processing...." : "Login"}
        />
      </form>
      <Link href="/signup" className="text-blue-500">
        Not a user Sign up ?
      </Link>
    </div>
  );
}
