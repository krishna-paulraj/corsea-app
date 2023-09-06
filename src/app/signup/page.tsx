"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  // Updated component name
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const onSignUp = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log(res.data);
      if (res.data.error) {
        toast.error("User already exists");
      }
      toast.success("User successfully created");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState({
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
