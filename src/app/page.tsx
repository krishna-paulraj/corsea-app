"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello !!</h1>
      <Link href="/signup" className="text-blue-600">
        Sign Up ?
      </Link>
    </main>
  );
}
