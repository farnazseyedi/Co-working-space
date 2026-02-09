"use client";
import React from "react";

interface SummaryCardProps {
  title: string;
  amount: string;
  gradient: string;
}

export default function SummaryCard({
  title,
  amount,
  gradient,
}: SummaryCardProps) {
  return (
    <div
      className="w-full rounded-2xl shadow-md overflow-hidden bg-white border-none"
      dir="rtl"
    >
      <div
        className={`h-12 w-full ${gradient} flex justify-center items-center px-4 text-sm font-medium text-gray-700`}
      >
        {title}
      </div>
      <div className="p-6 text-center text-lg font-semibold text-gray-800">
        {amount}
      </div>
    </div>
  );
}
