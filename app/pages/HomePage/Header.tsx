"use client";
import background from "@/images/home-page/back.jpg";
import Image from "next/image";
import logo from "@/images/home-page/logo.png";
import { useEffect, useState } from "react";
import WorkingHoursModal from "@/app/components/modals/working-hours-modal";
import { AuthModal } from "./auth-modal";

function Header() {
  const [openWorkingHours, setOpenWorkingHours] = useState(false);

  const HEADER_HEIGHT = 941;
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScrollNav = () => {
      const scrollY = window.scrollY;
      if (scrollY < HEADER_HEIGHT) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <div
      className="relative w-full h-[941px] overflow-hidden"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full h-full z-10 flex">
        <div
          className="w-[70%] h-full backdrop-blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
      </div>

      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center h-20">
          <div className=" flex w-[1320px] bg-others-white1 justify-between gap-10 h-20 mt-7 rounded-xl">
            <div className="w-[123px] h-20 flex gap-2 mr-10">
              <div className="flex justify-center h-16 items-center mt-2">
                <Image src={logo} width={64} height={64} alt="logo" />
              </div>
              <div className="text-tertiary-500 flex items-center text-3xl w-[55px] ">
                مکین
              </div>
            </div>

            <ul className="flex gap-8 relative items-center">
              <li className="relative group cursor-pointer flex flex-col items-center">
                <span className="leading-none">صفحه اصلی</span>

                <span className="mt-3 h-[3px] w-[3px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
              </li>
              <li className="relative group cursor-pointer flex flex-col items-center">
                <span className="leading-none">بلاگ </span>

                <span className="mt-3 h-[3px] w-[3px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
              </li>
              <li className="relative group cursor-pointer flex flex-col items-center">
                <span className="leading-none"> مرام نامه</span>

                <span className="mt-3 h-[3px] w-[2.5px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
              </li>
              <li className="relative group cursor-pointer flex flex-col items-center">
                <span className="leading-none">تماس با ما</span>

                <span className="mt-3 h-[3px] w-[2.5px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
              </li>
            </ul>

            <div>
              <AuthModal>
                <button className="rounded-xl ml-10 flex my-5 items-center h-10 text-primary-500 border-primary-500 border justify-center py-4 px-6 hover:bg-primary-300 hover:border-none transition">
                  ورود | ثبت نام
                </button>
              </AuthModal>
            </div>
          </div>
        </div>
      )}

      <div className="z-20 absolute flex flex-col mt-140 mr-40 gap-4">
        <div className="text-4xl text-primary-700">
          فضای کار اشتراکی اکادمی مکین
        </div>
        <div className="text-3xl text-primary-700">فضایی که کارت نیاز داره</div>
      </div>
      <div className="z-20 absolute">
        <div className="flex gap-2 mt-180 mr-40">
          <button className="w-[135px] h-14 bg-primary-500 text-white rounded-xl hover:bg-[#5167a6]">
            رزرو کن
          </button>
          <button
            onClick={() => setOpenWorkingHours(true)}
            className="w-[233px] h-14 border-2 rounded-xl border-primary-500 hover:bg-primary-300 hover:border-none"
          >
            مشاهده ساعت کاری
          </button>
        </div>
      </div>
      <WorkingHoursModal
        open={openWorkingHours}
        onClose={() => setOpenWorkingHours(false)}
      />
    </div>
  );
}

export default Header;
