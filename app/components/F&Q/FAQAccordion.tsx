"use client";

import { useState } from "react";
import { FAQItem } from "./F&Q";
import TrashIcon from "@/app/assets/icons/contentManagement/TrashIcon";

type FAQAccordionProps = {
  data?: FAQItem[];
};

const statusColor: Record<string, string> = {
  بیشتر: "text-primary-500",
  کمتر: "text-primary-500",
};

export default function FAQAccordion({ data }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const statusColor: Record<string, string> = {
    بیشتر: "text-primary-500",
    کمتر: "text-primary-500",
  };

  const removeFAQ = (index: number) => {
    // اگر میخوای حذف آیتم‌ها هم کار کنه، باید remove رو به parent بده
    console.log("remove:", index);
  };

  return (
    <section className="space-y-3">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden bg-neutral-50 ${
            !item.active ? "opacity-50" : ""
          } shadow-md`}
        >
          <div className="absolute top-0 right-0 h-full w-1 bg-tertiary-500" />

          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex justify-between items-center px-8 py-4 text-right"
          >
            <div>
              <div className="text-lg">{item.question}</div>
              <div className="text-sm text-neutral-400">
                {item.date} | {item.active ? "فعال" : "غیرفعال"}
              </div>
            </div>

            <div className="flex text-xl gap-5">
              <div className={statusColor[item.status]}>{item.status}</div>
              <div
                className={`transform transition-transform duration-300 scale-x-175 ${
                  statusColor[item.status]
                } ${activeIndex === index ? "rotate-0" : "rotate-180"}`}
              >
                ^
              </div>
            </div>
          </button>

          <div
            style={{
              maxHeight: activeIndex === index ? "500px" : "0",
              opacity: activeIndex === index ? 1 : 0,
              transition: "all 0.3s ease",
            }}
            className="overflow-hidden px-5"
          >
            <div className="my-3 h-px bg-neutral-300" />
            <p className="text-gray-700 text-sm py-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
