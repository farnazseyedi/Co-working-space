"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/persian";

interface PaymentFormProps {
  onFinalPay: () => void;
  totalPrice: number;
}

export default function PaymentForm({
  onFinalPay,
  totalPrice,
}: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"online" | "wallet">(
    "online",
  );
  const [showStep2, setShowStep2] = useState(false);
  const [isPaid, setIsPaid] = useState(false); 

  const walletBalance = 530000;
  const reservationCode = "۱۲۳۴۵۶۷";

  const handleAction = () => {
    if (paymentMethod === "online") {
      onFinalPay();
    } else {
      setShowStep2(true);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div
        className={cn(
          "bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-opacity",
          isPaid && "opacity-50",
        )}
      >
        <h2 className="text-xl font-bold text-right mb-8">
          ۱. انتخاب روش پرداخت
        </h2>

        <div className="space-y-4">
          {["online", "wallet"].map((method) => (
            <div key={method} className="flex flex-col">
              <label className="flex items-start justify-start gap-4 py-3 cursor-pointer">
                <div className="relative flex items-center justify-center mt-1.5">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === method}
                    onChange={() => {
                      setPaymentMethod(method as any);
                      setShowStep2(false);
                      setIsPaid(false);
                    }}
                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-primary-500"
                  />
                  <div className="absolute w-2.5 h-2.5 bg-primary-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={cn(
                      "text-lg",
                      paymentMethod === method
                        ? "text-slate-900 font-bold ml-auto"
                        : "text-gray-400",
                    )}
                  >
                    {method === "online" && "پرداخت آنلاین"}
                    {method === "wallet" && "کیف پول"}
                  </span>
                  {method === "wallet" && paymentMethod === "wallet" && (
                    <div className="mt-1 flex items-end justify-start gap-10 text-sm text-neutral-900">
                      <span>موجودی کیف پول:</span>
                      <span className="font-bold">
                        {formatPrice(walletBalance)} تومان
                      </span>
                    </div>
                  )}
                </div>
              </label>
              <div className="h-px bg-gray-50 w-full" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleAction}
            className="w-[424px] h-14 bg-primary-500 text-white py-4 rounded-full font-bold transition-all hover:opacity-90"
          >
            پرداخت
          </button>
        </div>
      </div>
      <div
        onClick={() => setIsPaid(!isPaid)}
        className={cn(
          "bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-all cursor-pointer",
          !showStep2 && !isPaid && "opacity-50",
        )}
      >
        <div className="flex justify-between items-center flex-row-reverse">
          <h2
            className={cn(
              "text-xl font-bold flex justify-start ml-auto",
              !isPaid ? "text-neutral-500" : "text-neutral-900",
            )}
          >
            ۲. وضعیت رزرو
          </h2>
        </div>

        {isPaid && (
          <div className="mt-8 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-full max-w-xl bg-[#BFE8D3] text-success-700 py-5 rounded-2xl text-center font-bold text-lg">
              رزرو شما با موفقیت ثبت شد
            </div>

            <div className="text-center font-bold text-neutral-900 text-xl">
              کد رزرو : {reservationCode}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "/dashboard";
              }}
              className="w-full max-w-xs border-2 border-primary-500 text-primary-500 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-colors"
            >
              تایید و رفتن به داشبورد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
