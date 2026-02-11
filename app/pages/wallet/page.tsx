"use client";

import NavigatinBar from "../../components/Navigation/NavigationBar";
import HomeIcon from "@/app/assets/icons/header/HomeIcon";
import VectorIcon from "@/app/assets/icons/header/VectorIcon";
import WalletPanel from "../../components/wallet/WalletDashboard";
import { reservationsByDay } from "@/app/data/reservationsData";

import TodayReservationsTable, {
  Reservation,
} from "@/app/components/pishkhan/pishTable/TodayReservationsTable";
import ReservationModal, {
  ReservationData,
} from "../../components/modals/InfoModal";
import { days } from "@/app/data/days";
import { toPersianNumber, toEnglishNumber } from "../../utils/convertNumber";

import { useState } from "react";
interface PersianCalendarProps {
  activeIndex: number;
}
export default function Dashboard({ activeIndex }: PersianCalendarProps) {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationData | null>(null);

  const activeDayKey = toEnglishNumber(days[activeIndex]?.date ?? "00/00");
  const reservations = reservationsByDay[activeDayKey] || [];

  const handleDetailClick = (res: Reservation) => {
    const modalData: ReservationData = {
      name: res.fullName,
      date: toPersianNumber(activeDayKey),
      time: "۱۰:۰۰",
      amount: toPersianNumber(50000),
      trackingNumber: "123456",
      transactionId: "۱۲۳۴۵۶۰۹۸۰۰۰۴۳۲۰۰۳۴۵۶۸۷۴۵",
      phone: toPersianNumber(res.phone),
      code: toPersianNumber(res.rowNumber),
      status: "موفق",
    };
    setSelectedReservation(modalData);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <NavigatinBar />

      <div className="mr-64 p-6">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">کیف پول</h1>
          </div>
          <div className="flex gap-8">
            <div>
              <HomeIcon />
            </div>
            <div>
              <VectorIcon />
            </div>
          </div>
        </header>

        <div className="mt-6 space-y-4">
          <WalletPanel />
        </div>
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">گردش کیف پول</h1>
        </div>
        <TodayReservationsTable
          reservations={reservations}
          onDetailClick={handleDetailClick}
        />

        {selectedReservation && (
          <ReservationModal
            data={selectedReservation}
            onClose={() => setSelectedReservation(null)}
          />
        )}
      </div>
    </div>
  );
}
