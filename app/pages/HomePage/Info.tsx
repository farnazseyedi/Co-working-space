"use client";
import BlueButton from "@/app/components/buttons/BlueBotton";
import Typewriter from "../../components/typewriter/TypewriterEffect";
import namad from "../../../public/Home/namad.png";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <div className="flex mt-2 justify-center items-center text-4xl text-neutral-900 font-black">
        فراتر از یک آکادمی...
      </div>
      <div className="flex mt-2.5 flex-col md:flex-row text-neutral-900 items-center justify-center gap-8 p-4 ">
        <div className="flex flex-col items-start md:items-start space-y-20 md:w-1/2 lg:w-1/3">
          <Typewriter />
          <BlueButton />
        </div>
        <div className="flex md:w-1/2 lg:w-1/3">
          <Image
            src={namad}
            alt="Logo"
            className="object-contain rounded-t-full rounded-b-full"
            style={{ marginRight: "20px" }}
          />
        </div>
      </div>
    </>
  );
}
