"use client";

import React from "react";
import Image from "next/image";
import exm from "../../../public/Home/exm.png";

export default function BlogCards() {
  const cards = [
    {
      img: exm,
      title: "استفاده از هوش مصنوعی اینستاگرام",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      time: "۵ دقیقه",
      tags: ["میزبانی وب", "مقالات هاست"],
    },
    {
      img: exm,
      title: "بهترین جایگاه اشتراک هاست چیست؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      time: "۵ دقیقه",
      tags: ["میزبانی وب", "مقالات هاست"],
    },
    {
      img: exm,
      title: "روش های پرداخت اینترنتی بدون درگاه پرداخت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      time: "۵ دقیقه",
      tags: ["هوش مصنوعی", "اینستاگرام"],
    },
  ];

  return (
    <div className="w-full px-6 py-12">
      <div className="flex items-center justify-center text-center font-black text-3xl mb-12 gap-6">
        <span className="h-0.5 w-72 bg-linear-to-r from-neutral-900 to-transparent" />
        وبلاگ مکین و تازه‌های آموزش وب
        <span className="h-0.5 w-72 bg-linear-to-l from-neutral-900 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative pb-[90px] sm:pb-[85px] lg:pb-[75px]"
          >
            <div className="inverted-radius rounded-(--r) bg-neutral-50 shadow-2xl group hover:shadow-2xl transition-shadow duration-300 ">
              <div className="p-6 pb-10">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover rounded-(--r)"
                  priority={index === 0}
                />
              </div>

              <div className="px-6 pb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed line-clamp-4 text-gray-700">
                  {card.desc}
                </p>

                <div className="mt-6">
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-500">۱۴۰۴/۰۹/۲۱</span>
                    <span className="h-5 w-px bg-neutral-200 mx-4" />
                    <span className="text-sm text-neutral-400 font-medium whitespace-nowrap">
                      مدت زمان مطالعه: {card.time}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-tertiary-100 border border-Neutral-800 text-neutral-900 text-xs px-3 py-1.5 rounded-(--r) shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[73px] left-[20px]">
              <button className="w-20 h-20 bg-linear-to-r from-orange-500 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
