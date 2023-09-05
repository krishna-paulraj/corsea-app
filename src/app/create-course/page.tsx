"use client";
import { useState } from "react";

export default function page() {
  // const [courseData, setCourseData] = useState;
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-screen h-[85vh]">
      <div className="flex flex-col justify-center items-start w-1/2 p-14">
        <h1 className="text-2xl font-extrabold">
          Great! Your students are waiting
        </h1>
        <p className="my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          sint consectetur cumque sit repellendus voluptas fuga magni culpa
          ipsum atque fugiat debitis, architecto quae obcaecati? Recusandae,
          iure modi. Ipsa, debitis!
        </p>
      </div>
      <div className="w-1/2">
        <div className=" bg-white/80 h-[75vh] w-[32vw] m-12 mx-24 rounded-3xl">
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
    </div>
  );
}
