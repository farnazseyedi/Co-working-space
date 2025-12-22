"use client";

import { useState } from "react";
import Image from "next/image";

import slider1 from "@/images/home-page/main-slider1.jpg";
import slider2 from "@/images/home-page/main-slider2.jpg";
import slider3 from "@/images/home-page/main-slider3.jpg";
import slider4 from "@/images/home-page/main-slider4.jpg";
import slider5 from "@/images/home-page/back.jpg";

import leftArr from "@/icons/leftArr.svg";
import rightArr from "@/icons/rightArr.svg";

const slides = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
  { id: 4, image: slider4 },
  { id: 5, image: slider5 },
];

export default function HomePageSlider() {
  const totalSlides = slides.length;
  const slotPositions = [-460, -260, 0, 260, 460];
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSlideStyle = (i: number) => {
    const diff = i - activeIndex;
    const adjustedDiff = ((diff + totalSlides) % totalSlides) - 2;

    const size =
      adjustedDiff === 0
        ? { width: 800, height: 400 }
        : Math.abs(adjustedDiff) === 1
        ? { width: 640, height: 320 }
        : { width: 480, height: 240 };

    const left = `calc(50% + ${slotPositions[adjustedDiff + 2]}px - ${
      size.width / 2
    }px)`;

    const top = `calc(50% - ${size.height / 2}px + 20px)`;
    const zIndex = 10 - Math.abs(adjustedDiff);

    return { ...size, left, top, zIndex, isCenter: adjustedDiff === 0 };
  };

  return (
    <div className="w-full h-194 bg-secondary-100 mx-auto relative py-24 px-15 flex flex-col gap-2">
      <h2 className="text-center font-bold text-xl text-neutral-900 ">
        عکس‌های فضا
      </h2>

      <div className="relative h-146">
        {slides.map((slide, i) => {
          const { width, height, left, top, zIndex, isCenter } =
            getSlideStyle(i);

          return (
            <div
              key={slide.id}
              onClick={() => setActiveIndex(i)}
              style={{ width, height, left, top, zIndex }}
              className="absolute cursor-pointer overflow-hidden rounded-xl transition-all duration-700 ease-in-out shadow-lg"
            >
              <Image src={slide.image} alt="" fill className="object-cover" />

              <div
                className={`
                  absolute inset-0 transition-opacity duration-700
                  ${isCenter ? "opacity-0" : "opacity-100"}
                  
                `}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center text-gray-500 transition"
        >
          <Image src={rightArr} width={16} height={16} alt="right arrow" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                i === activeIndex
                  ? "bg-tertiary-500 w-4 h-4"
                  : "bg-neutral-400 hover:bg-neutral-500"
              }
        `}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center text-gray-500 transition"
        >
          <Image src={leftArr} width={16} height={16} alt="left arrow" />
        </button>
      </div>
    </div>
  );
}
