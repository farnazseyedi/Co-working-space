"use client";

import { useSearchParams } from "next/navigation";
import PaymentSidebar from "@/app/components/PaymentFlow/paymentSidebar";
import PaymentForm from "@/app/components/PaymentFlow/paymentForm";
import { useRouter } from "next/navigation";
import PaymentNavbar from "@/app/components/PaymentFlow/navbar";
import PaymentModal from "@/app/components/PaymentFlow/calendar-modal";
import { useState } from "react";
import Footer from "../HomePage/Footer";

export default function PaymentPage() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const daysCount = Number(searchParams.get("days")) || 0;
  const BASE_PRICE = 55000;

  if (daysCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>هیچ روزی انتخاب نشده است.</p>
        <button onClick={() => router.back()}>بازگشت به تقویم</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <PaymentNavbar />
      <div className="max-w-6xl mt-14 mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-[2] w-full">
          <PaymentForm
            totalPrice={daysCount * BASE_PRICE}
            onFinalPay={() => alert("در حال انتقال به بانک...")}
          />
        </div>

        <div className="flex-1 w-full md:sticky md:top-10">
          <PaymentSidebar
            daysCount={daysCount}
            basePrice={BASE_PRICE}
            onEdit={() => router.back()}
            onCalendar={() => setIsEditOpen(true)}
          />
          <PaymentModal
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
