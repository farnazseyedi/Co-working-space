"use client";
import React, { useState } from "react";

export default function PersianNumberInput() {
  const [value, setValue] = useState("");
  const [words, setWords] = useState("");

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

  function threeDigitsToWords(num: number) {
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
  }

  function numberToPersianWords(num: number) {
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
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setValue(numericValue);
    const number = parseInt(numericValue);
    setWords(isNaN(number) ? "" : numberToPersianWords(number));
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="۳۰۰,۰۰۰"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <span className="text-gray-700 text-sm">{words}</span>
    </div>
  );
}
