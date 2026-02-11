"use client";

import { useState } from "react";
import Calendar from "@/app/components/calendar/Calendar";
import BookingSummary from "@/app/components/calendar/SummaryPanel";

export default function CalendarSection() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [calculatingPrice, setCalculatingPrice] = useState(false);

  const BASE_PRICE = 55000;

  const handleDateToggle = (date: string) => {
    setCalculatingPrice(true);
    setSelectedDates((prev) => {
      if (prev.includes(date)) {
        return prev.filter((d) => d !== date);
      } else {
        return [...prev, date];
      }
    });
    setTimeout(() => {
      setCalculatingPrice(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-others-bg1 pb-20">
      <div className="flex items-center justify-center text-center font-black text-3xl py-15 gap-5">
        <span className="h-0.5 w-40 md:w-80 bg-linear-to-r from-primary-500 to-others-bg1 mr-2"></span>
       رزرو صندلی
        <span className="h-0.5 w-40 md:w-80 bg-linear-to-l from-primary-500 to-others-bg1 ml-2"></span>
      </div>

      <div className="w-full flex items-center justify-center px-8">
        <div className="flex gap-8 transition-all duration-500 ease-in-out">
          <div className="w-[1/2]">
            <Calendar
              selectedDates={selectedDates}
              onDateToggle={handleDateToggle}
            />
          </div>
          <div className="w-[1/2]">
            <BookingSummary
              daysCount={selectedDates.length}
              basePrice={BASE_PRICE}
              isLoading={calculatingPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
