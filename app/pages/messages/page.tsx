"use client";

import { useState } from "react";
import NavigatinBar from "../../components/Navigation/NavigationBar";
import HomeIcon from "@/app/assets/icons/header/HomeIcon";
import VectorIcon from "@/app/assets/icons/header/VectorIcon";
import FAQAccordion from "@/app/components/F&Q/FAQAccordion";
import FAQFilters from "@/app/components/F&Q/FAQFilters";
import { SampleFAQData } from "@/app/components/F&Q/SampleFAQData";

export default function Dashboard() {
  const [filter, setFilter] = useState("همه");

  const counts = {
    همه: SampleFAQData.length,
    "تاریخ امروز": SampleFAQData.filter((f) => f.daysAgo === 0).length,
    "خوانده شده": SampleFAQData.filter((f) => f.active).length,
    "خوانده نشده": SampleFAQData.filter((f) => !f.active).length,
  };

  const filteredData = SampleFAQData.filter((f) => {
    if (filter === "همه") return true;
    if (filter === "تاریخ امروز") return f.daysAgo === 0;
    if (filter === "خوانده شده") return f.active;
    if (filter === "خوانده نشده") return !f.active;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigatinBar />

      <div className="mr-64 p-6">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">پیام ها</h1>
          <div className="flex gap-8">
            <HomeIcon />
            <VectorIcon />
          </div>
        </header>

        <div className="mt-6 space-y-4">
          <FAQFilters
            activeFilter={filter}
            onChange={setFilter}
            counts={counts}
          />
          <FAQAccordion data={filteredData} />
        </div>
      </div>
    </div>
  );
}
