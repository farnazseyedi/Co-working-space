"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import { Button } from "../ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PaymentModal({ open, onClose }: Props) {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [calculatingPrice, setCalculatingPrice] = useState(false);

  const handleDateToggle = (date: string) => {
    setCalculatingPrice(true);
    setSelectedDates((prev) => {
      if (prev.includes(date)) {
        return prev.filter((d) => d !== date);
      } else {
        return [...prev, date];
      }
    });
    setTimeout(() => {
      setCalculatingPrice(false);
    }, 500);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] w-full bg-white max-h-[98vh] overflow-y-hidden border-none">
        <DialogHeader>
          <DialogTitle className="flex justify-center p-1">
            تغییر تاریخ
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center">
          <Calendar
            selectedDates={selectedDates}
            onDateToggle={handleDateToggle}
          />
        </div>
        <div className="flex justify-end">
      <Button className="bg-primary-500 text-white rounded-2xl w-28">تایید</Button>
      </div>
      </DialogContent>
    </Dialog>
  );
}
