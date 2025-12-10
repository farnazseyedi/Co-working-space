"use client";
import React from "react";
import Image from "next/image";

export default function CutoutCornerCard() {
    return (
        <div className="relative w-80">
            <div className="flex items-center justify-center text-center font-black text-3xl my-15 gap-5">
                <span className="h-0.5 w-80 bg-gradient-to-r from-black to-transparent mr-2"></span>
                وبلاگ مکین و تازه های آموزش وب
                <span className="h-0.5 w-80 bg-gradient-to-l from-black to-transparent ml-2"></span>
            </div>
            <div
                className="border border-gray-300 shadow-md overflow-visible rounded-lg"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                }}
            >
                <Image
                    src="/images/pic1.jpg"
                    alt="example"
                    width={320}
                    height={20000000000}
                    className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">عنوان </h3>
                    <p className="text-gray-700">توضیح.</p>
                </div>
            </div>
            <div className="">
                <button
                    className="absolute bottom-0 left-0 transform translate-x-2 translate-y-2 bg-orange-500 text-white w-10 h-10 rounded-md flex items-center justify-center z-20"
                >
                    n
                </button>
            </div>
        </div>
    );
}
