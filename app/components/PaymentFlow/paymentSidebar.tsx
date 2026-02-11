"use client";
import { toPersianNumber, formatPrice } from "@/lib/persian";
import { Button } from "@/app/components/ui/button";
interface PaymentSidebarProps {
  daysCount: number;
  basePrice: number;
  onEdit: () => void;
  onCalendar:()=> void;
}
export default function PaymentSidebar({
  daysCount,
  basePrice,
  onCalendar,
}: PaymentSidebarProps) {
  const totalPrice = daysCount * basePrice;

  return (
    <div className="w-80 bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 h-fit">
      <h3 className="text-lg font-bold text-start mb-6 text-slate-900">
        جزئیات رزرو
      </h3>

      <div className="flex justify-between items-center py-4 border-b border-gray-100">
        <div className="text-right">
          <p className="text-sm text-neutral-500 mb-1">تعداد روز انتخابی</p>
          <p className="font-bold text-neutral-900">
            {toPersianNumber(daysCount)} روز
          </p>
        </div>
        <Button
          onClick={onCalendar} 
          variant="ghost"
          className="bg-secondary-100 text-neutral-900 hover:bg-secondary-200 text-xs px-4 h-8 rounded-lg"
        >
          تغییر
        </Button>
      </div>

      <div className="py-4 space-y-4">
        <p className="text-right text-neutral-500 text-sm">جزئیات قیمت</p>

        <div className="flex justify-between items-center text-sm">
          <span className="text-neutral-500 text-xs">
            {toPersianNumber(daysCount)} روز × {formatPrice(basePrice)} تومان
          </span>
          <span className="text-neutral-500">
            {formatPrice(totalPrice)} تومان
          </span>
        </div>

        <div className="flex justify-between items-center text-sm text-success-600">
          <span>تخفیف پلکانی:</span>
          <span>{formatPrice(165000)} تومان</span>
        </div>
      </div>

      <div className="py-4 border-t border-gray-100">
        <div className="relative">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-600 rounded-full"></span>
          <input
            type="text"
            placeholder="کد تخفیف دارید؟"
            className="w-full text-right pr-6 py-2 outline-none text-sm text-neutral-600 placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-2">
        <span className="text-neutral-900  text-lg font-bold">
          مبلغ قابل پرداخت
        </span>
        <span className="font-bold text-slate-900">
          {formatPrice(825000)} تومان
        </span>
      </div>
    </div>
  );
}
