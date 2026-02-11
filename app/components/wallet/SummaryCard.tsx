"use client";
import React from "react";
import Image from "next/image";

interface SummaryCardProps {
  title: React.ReactNode;
  amount: string;
  bgImage?: string;
}

export default function SummaryCard({
  title,
  amount,
  bgImage,
}: SummaryCardProps) {
  return (
    <div className="w-full rounded-2xl shadow-md overflow-hidden bg-white">
      <div className="relative h-12 w-full">
        {bgImage && (
          <Image src={bgImage} alt="" fill className="object-cover" />
        )}

        <div className="relative z-10 h-full flex justify-center items-center px-4 text-sm font-medium text-gray-700">
          {title}
        </div>
      </div>

      <div className="p-6 text-center text-lg font-semibold text-gray-800">
        {amount}
      </div>
    </div>
  );
}
