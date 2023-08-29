"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { NextResponse } from "next/server";
export default function page() {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);

  const onSignUp = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log(res.data);
      res.data.error
        ? toast.error("User already exists")
        : toast.success("User successfully created");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <h1 className="text-2xl">Sign Up</h1>
      <form onSubmit={onSignUp} className="flex flex-col gap-5">
        Name:
        <input
          className="text-black rounded-md p-1"
          type="text"
          name="name"
          required
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        Email:
        <input
          className="text-black rounded-md p-1"
          type="email"
          name="email"
          required
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        Username:
        <input
          className="text-black rounded-md p-1"
          type="text"
          name="username"
          required
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        Password:
        <input
          className="text-black rounded-md p-1"
          type={showPass ? "text" : "password"}
          name="password"
          required
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <input
          className=""
          onClick={() => {
            setShowPass(!showPass);
          }}
          type="button"
          value="Show Password"
        />
        <button
          className={
            loading
              ? "bg-red-500 my-10 rounded-md p-1"
              : "bg-slate-500 my-10 rounded-md p-1"
          }
          type="submit"
        >
          {loading ? "Processing..." : "Sign up"}
        </button>
      </form>
      <Link href="/login" className=" text-blue-500">
        Already a user Login in ?
      </Link>
    </div>
  );
}

function useState(arg0: {
  name: string;
  email: string;
  username: string;
  password: string;
}): [any, any] {
  throw new Error("Function not implemented.");
}
