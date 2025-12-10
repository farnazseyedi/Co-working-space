"use client";
import React from "react";
import Image from "next/image";

export default function BlogCards() {
    const cards = [
        {
            img: "/images/pic1.jpg",
            title: "بهست؟",
            desc: "لورمت...",
            time: " دقیقه",
            tags: ["میزبانی وب", "مقالات هاست"],
        },
        {
            img: "/images/pic2.jpg",
            title: "عنوان دوم کارت",
            desc: "توضیح کارت دوم اینجا قرار می‌گیرد و نمونه متن کوتاه است...",
            time: "۳ دقیقه",
            tags: ["میزبانی وب"],
        },
        {
            img: "/images/pic3.jpg",
            title: "عنوان سوم کارت",
            desc: "توضیح کارت سوم اینجا قرار می‌گیرد و خلاصه‌ای از محتواست...",
            time: "۴ دقیقه",
            tags: ["مقالات هاست"],
        },
    ];

    return (
        <div className="w-full px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                        <Image
                            src={card.img}
                            alt={card.title}
                            width={400}
                            height={200}
                            className="w-full h-44 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-700 text-sm">{card.desc}</p>
                        </div>
                        <div className="flex items-center justify-between px-4 pb-4">
                            <span className="text-gray-400 text-xs">مدت زمان مطالعه: {card.time}</span>
                            <div className="flex gap-2">
                                {card.tags.map((tag, idx) => (
                                    <button
                                        key={idx}
                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
