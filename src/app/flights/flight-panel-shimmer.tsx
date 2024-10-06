"use client";
import React, { useEffect } from "react";
import "./shimmer.css";
import plane from "@/icons/plane.png";
import Image from "next/image";
const Shimmer = () => {
  const shimmerCount = Math.floor((window.innerHeight - 200) / 200);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center justify-start relative">
      {/* Center box for loading */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
        <Image src={plane} alt="plane icon" />
        <div className="flex flex-col justify-center items-center text-[#787B80] text-lg pb-2 px-4">
          <p className="">Please make sure you search something</p>
          <p className="">We'll search 400+ flights</p>
          <p className="">We'll serve you best results</p>
        </div>
      </div>

      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden p-4 max-w-6xl w-full mx-auto mt-12"
        >
          <div className="flex justify-around items-center mb-2">
            <div className="w-16 h-16 shimmer rounded-xl"></div>
            <p className="text-gray-700 h-16 gap-4 shimmer w-9/12 rounded-xl"></p>
          </div>
          <div className="flex justify-around mb-4">
            <div className="w-16 h-16 shimmer rounded-xl"></div>
            <p className="text-gray-700 h-16 gap-4 shimmer w-9/12 rounded-xl"></p>
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded h-8 w-1/4 shimmer"></div>
            <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded h-8 w-1/4 shimmer"></div>
            <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded h-8 w-1/4 shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
