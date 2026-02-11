"use client";
import React from "react";
import BlurCard from "./BlurCard";
import SuggestionChip from "./SuggestionChip";

export default function RechargePanel() {
  return (
    <div className=" bg-white rounded-2xl shadow-md border-none overflow-hidden">
      <div>
        <BlurCard />
        <div className="relative self-end bg-indigo-100 text-indigo-800 px-6 py-3 rounded-b-3xl rounded-t-lg text-sm font-medium">
          موجودی فعلی شما: ۴۳,۰۰۰ تومان
        </div>
      </div>
      <div className="z-10 flex flex-col gap-6">
        <p className="text-gray-700 text-sm text-center">
          برای شارژ کیف پول مبلغ دلخواه خود را در باکس زیر بنویسید:
        </p>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">مبلغ مورد نظر</label>
          <div className="relative">
            <input
              type="text"
              placeholder="۳۰۰,۰۰۰"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              تومان
            </span>
          </div>
          <span className="text-xs text-blue-600">سیصد هزار تومان</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-gray-600">مبالغ پیشنهادی:</span>
          <SuggestionChip label="۵۰,۰۰۰ تومان" />
          <SuggestionChip label="۱۰۰,۰۰۰ تومان" />
          <SuggestionChip label="۲۰۰,۰۰۰ تومان" />
        </div>

        <div className="pt-4">
          <button className="bg-primary-500 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl shadow-md transition font-medium">
            تایید و پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}
