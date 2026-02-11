"use client";
import React, { useState } from "react";
import BlurCard from "./BlurCard";
import SuggestionChip from "./SuggestionChip";
import Submit from "@/app/assets/icons/wallet/Submit";

const englishToPersian = (str: string) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (d) => persianNumbers[parseInt(d)]);
};

const persianToNumber = (str: string) => {
  return (
    parseInt(str.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))) || 0
  );
};

export default function RechargePanel() {
  const [amount, setAmount] = useState("");
  const [amountWords, setAmountWords] = useState("");

  const ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
  const tows = [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
  ];
  const tens = [
    "",
    "",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const hundreds = [
    "",
    "صد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];
  const thousands = ["تومان", "هزار", "میلیون", "میلیارد"];

  const threeDigitsToWords = (num: number) => {
    let str = "";
    const h = Math.floor(num / 100);
    const t = num % 100;
    if (h) str += hundreds[h];
    if (t) {
      if (str) str += " و ";
      if (t < 10) str += ones[t];
      else if (t < 20) str += tows[t - 10];
      else {
        str += tens[Math.floor(t / 10)];
        if (t % 10) str += " و " + ones[t % 10];
      }
    }
    return str;
  };

  const numberToPersianWords = (num: number) => {
    if (num === 0) return "صفر";
    const wordsArray: string[] = [];
    let i = 0;
    while (num > 0) {
      const part = num % 1000;
      if (part) {
        let w = threeDigitsToWords(part);
        if (thousands[i]) w += " " + thousands[i];
        wordsArray.unshift(w);
      }
      num = Math.floor(num / 1000);
      i++;
    }
    return wordsArray.join(" و ");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = englishToPersian(e.target.value);
    setAmount(newValue);
    setAmountWords(numberToPersianWords(persianToNumber(newValue)));
  };

  const handleSuggestionClick = (label: string) => {
    const numericOnly = label.replace(/[^۰-۹]/g, "");
    setAmount(numericOnly);
    setAmountWords(numberToPersianWords(persianToNumber(numericOnly)));
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-md border-none overflow-hidden">
      <div className=" absolute flex flex-col">
        <div className="flex relative w-fit">
          <BlurCard />

          <div className="absolute inset-0 flex ml-8 items-center justify-center">
            <div className=" text-neutral-800 flex flex-col items-center justify-center rounded-xl font-medium">
              <div>موجودی فعلی شما:</div>
              <div className="text-xl">۴۳,۰۰۰ تومان</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mr-56 relative">
        <div className="z-10 flex flex-col justify-center items-start mt-30 gap-6 p-4">
          <div className="text-neutral-800 text-sm text-center">
            برای شارژ کیف پول مبلغ دلخواه خود را در باکس زیر بنویسید:
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-900">مبلغ مورد نظر</label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={handleChange}
                placeholder="۳۰۰۰۰۰"
                className="w-full border border-gray-300 rounded-lg px-56 py-3 flex focus:outline-none focus:ring-2 focus:ring-tertiary-600"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                تومان
              </span>
            </div>
            <span className="text-xs text-blue-600">{amountWords}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-neutral-950">مبالغ پیشنهادی:</span>
            {["۵۰,۰۰۰ تومان", "۱۰۰,۰۰۰ تومان", "۲۰۰,۰۰۰ تومان"].map((label) => (
              <SuggestionChip
                key={label}
                label={label}
                onClick={() => handleSuggestionClick(label)}
              />
            ))}
          </div>
          <button className="self-end flex gap-0.5 bg-primary-500 text-white px-8 py-3 rounded-md shadow-md transition font-medium hover:opacity-90">
            <Submit />
            تایید و پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}
