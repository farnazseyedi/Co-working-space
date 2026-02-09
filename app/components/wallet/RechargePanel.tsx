"use client";
import React, { useState } from "react";
import BlurCard from "./BlurCard";
import SuggestionChip from "./SuggestionChip";

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
    <div className="bg-white rounded-2xl shadow-md border-none overflow-hidden max-w-md mx-auto">
      <BlurCard />

      <div className="relative self-end bg-indigo-100 text-indigo-800 px-6 py-3 rounded-b-3xl rounded-t-lg text-sm font-medium">
        موجودی فعلی شما: ۴۳,۰۰۰ تومان
      </div>

      <div className="z-10 flex flex-col gap-6 p-4">
        <p className="text-gray-700 text-sm text-center">
          برای شارژ کیف پول مبلغ دلخواه خود را در باکس زیر بنویسید:
        </p>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">مبلغ مورد نظر</label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleChange}
              placeholder="۳۰۰۰۰۰"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              تومان
            </span>
          </div>
          <span className="text-xs text-blue-600">{amountWords}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-gray-600">مبالغ پیشنهادی:</span>
          {["۵۰,۰۰۰ تومان", "۱۰۰,۰۰۰ تومان", "۲۰۰,۰۰۰ تومان"].map((label) => (
            <SuggestionChip
              key={label}
              label={label}
              onClick={() => handleSuggestionClick(label)}
            />
          ))}
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
