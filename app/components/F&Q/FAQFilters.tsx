"use client";

import { Dispatch, SetStateAction } from "react";

type FAQFiltersProps = {
  activeFilter: string;
  onChange: Dispatch<SetStateAction<string>>;
  counts: Record<string, number>;
};

export default function FAQFilters({
  activeFilter,
  onChange,
  counts,
}: FAQFiltersProps) {
  const filters = ["همه", "تاریخ امروز", "خوانده شده", "خوانده نشده"];

  return (
    <div className="flex gap-2 mb-6 justify-start flex-wrap mt-10">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-2 rounded-full border transition ${
            activeFilter === f
              ? "bg-tertiary-500 text-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {f} ({counts[f as keyof typeof counts] ?? 0})
        </button>
      ))}
    </div>
  );
}
