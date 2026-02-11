import Image from "next/image";
import logo from "@/images/home-page/logo.png";

export default function PaymentNavbar() {
  return (
    <div className="flex justify-center">
      <div className=" flex w-330 bg-others-white1 justify-between gap-20 h-20 mt-2 rounded-full">
        <div className="w-30.75 h-20 flex gap-2 mr-10">
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

            <span className="mt-3 h-0.75 w-0.75 rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
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
            <span className="leading-none"> فراتر از یک اکادمی</span>

            <span className="mt-3 h-[3px] w-[2.5px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <span className="leading-none"> وبلاگ</span>

            <span className="mt-3 h-[3px] w-[2.5px] rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-tertiary-500"></span>
          </li>
        </ul>

        <div>
          <button className="rounded-xl ml-10 flex my-5 items-center h-10 text-primary-500 border-primary-500 border justify-center py-4 px-6 hover:bg-primary-300 hover:border-none transition">
            ورود | ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}
