"use client";
import { useState } from "react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        { question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟", answer: "Answer 1..." },
        { question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟", answer: "Answer 2..." },
        { question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟", answer: "Answer 3..." },
        { question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟", answer: "Answer 3..." },
        { question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟", answer: "Answer 3..." },
    ];

    const toggleFAQ = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="pt-10 min-h-screen">
            <div className="flex items-center justify-center text-center font-black text-3xl my-15 gap-5">
                <span className="h-0.5 w-80 bg-linear-to-r from-black to-transparent mr-2"></span>
                سوالات پر تکرار
                <span className="h-0.5 w-80 bg-linear-to-l from-black to-transparent ml-2"></span>
            </div>

            <section className="max-w-[1200px] w-[98%] mx-auto mb-6 space-y-3 h-[500px]">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl border border-gray-300 transition-all duration-300 overflow-hidden bg-white shadow-md`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-8 py-6 text-left text-gray-900 font-medium focus:outline-none"
                        >
                            <div className="text-xl">
                                <span>{item.question}</span>
                            </div>
                            <span
                                className={`transform transition-transform duration-300 scale-x-175 ${activeIndex === index
                                    ? "rotate-0 text-orange-500"
                                    : "rotate-180 text-orange-500"
                                    }`}
                            >
                                ^
                            </span>

                        </button>

                        <div
                            style={{
                                maxHeight: activeIndex === index ? "500px" : "0",
                                opacity: activeIndex === index ? 1 : 0,
                                transition: "all 0.3s ease",
                            }}
                            className="px-5 overflow-hidden"
                        >
                            <hr className="border-gray-300 mb-3" />
                            <p className="text-gray-700 text-sm py-2">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
