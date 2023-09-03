"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function page() {
  const [token, setToken] = useState("xyz");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/verifyToken", { token, pass });
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(
      new URL(window.location.search).search
    );
    const urlToken: any = urlParams.get("token");
    setToken(urlToken);
  });

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setPass(e.target.value.password);
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 h-screen">
      <h1>Change Password</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center p-2 "
      >
        <input type="text" placeholder="New Pass" name="password" />
        <button
          className={
            loading
              ? "bg-red-500 my-10 rounded-md p-1"
              : "bg-slate-500 my-10 rounded-md p-1"
          }
          type="submit"
        >
          Change
        </button>
      </form>
    </div>
  );
}
