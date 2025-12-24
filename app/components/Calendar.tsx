"use client";

import { useState, useMemo } from "react";
import jalaali from "jalaali-js";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { toPersianNumber } from "@/lib/persian";
import { cn } from "@/lib/utils";
import Image from "next/image";

import tick from "@/icons/tick-square.svg"

const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

interface CalendarProps {
  selectedDates: string[];
  onDateToggle: (date: string) => void;
  loading?: boolean;
}

export default function Calendar({
  selectedDates,
  onDateToggle,
}: CalendarProps) {
  const [viewDate, setViewDate] = useState({ year: 1404, month: 9 });
  const calendarDays = useMemo(() => {
    const { year, month } = viewDate;
    const daysInMonth = jalaali.jalaaliMonthLength(year, month);
    const { gy, gm, gd } = jalaali.toGregorian(year, month, 1);
    const date = new Date(gy, gm - 1, gd);
    const dayOfWeek = (date.getDay() + 1) % 7;

    const days = [];
    for (let i = 0; i < dayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }, [viewDate]);

  const handlePrevMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 1) return { year: prev.year - 1, month: 12 };
      return { ...prev, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 12) return { year: prev.year + 1, month: 1 };
      return { ...prev, month: prev.month + 1 };
    });
  };

  const getFullDateString = (day: number) => {
    return `${viewDate.year}-${String(viewDate.month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
  };

  return (
    <div className="w-162 h-full bg-others-white1 p-6 rounded-3xl shadow-sm border border-neutral-100">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-tertiary-800">
          تقویم <span className="text-tertiary-500">مکین</span>
        </h2>
      </div>

      <div className="flex items-center justify-between mb-8 px-2">
        <button
          onClick={handleNextMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-200 text-black transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <span className="text-lg font-bold text-slate-800">
          {persianMonths[viewDate.month - 1]} {toPersianNumber(viewDate.year)}
        </span>

        <button
          onClick={handlePrevMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-200 text-black transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-4 text-center w-full ">
        {weekDays.map((d) => (
          <span key={d} className="text-xs font-bold text-neutral-900">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-6 gap-x-1 place-items-center">
        {calendarDays.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} className="w-12 h-12" />;

          const dateStr = getFullDateString(day);
          const isSelected = selectedDates.includes(dateStr);

          const isFriday = (index + 1) % 7 === 0;

          const isToday = day === 29 && viewDate.month === 9;

          return (
            <button
              key={dateStr}
              onClick={() => onDateToggle(dateStr)}
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-200",

                isSelected
                  ? "bg-secondary-500 text-white shadow-md  hover:text-neutral-900"
                  : isFriday
                  ? "bg-neutral-400 text-neutral-200 rounded-md"
                  : "text-neutral-900 hover:bg-secondary-200" ,

                isToday &&
                  !isSelected &&
                  "border-2 border-sky-400 text-sky-600 rounded-full"
              )}
            >
              {toPersianNumber(day)}
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-start gap-2 text-xs text-neutral-500">
         <div className="w-4 h-4 rounded text-neutral-500">
          <Image src={tick} alt="tick"/>
        </div>
        <span>۳ روز رایگان با انتخاب ۱۸ روز رزرو</span>
       
      </div>
    </div>
  );
}
