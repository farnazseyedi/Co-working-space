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
                <span className="h-0.5 w-72 bg-linear-to-r from-black to-transparent" />
                وبلاگ مکین و تازه‌های آموزش وب
                <span className="h-0.5 w-72 bg-linear-to-l from-black to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative 
                                   pb-[90px] 
                                   sm:pb-[85px]
                                   lg:pb-[75px]"
                    >

                        <div className="bg-white rounded-3xl rounded-br-none shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-6 pb-10">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-40 object-cover"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="p-6 pb-10">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
                                <p className="text-base leading-relaxed line-clamp-4 text-gray-700">
                                    {card.desc}
                                </p>
                            </div>
                        </div>

                        <div className="absolute -button-1 flex items-center ">
                            <div className="flex flex-col bg-white shadow-2xl py-4 px-18 border border-gray-100 border-t-0 rounded-br-3xl rounded-bl-3xl ">
                                <div className="flex ">
                                    <span className="text-sm text-gray-600">۱۴۰۴/۰۹/۲۱</span>
                                    <span className="h-5 w-px bg-gray-300 mx-4" />
                                    <span className="flex text-sm text-gray-700 font-medium whitespace-nowrap ">
                                        مدت زمان مطالعه: {card.time}
                                    </span>
                                </div>
                                <div className="flex mt-3">
                                    {card.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 mr-2">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}