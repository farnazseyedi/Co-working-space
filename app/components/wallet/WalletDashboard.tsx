"use client";
import React from "react";
import SummaryCard from "./SummaryCard";
import RechargePanel from "./RechargePanel";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-26">
          <SummaryCard
            title="جمع واریزی"
            amount="۵۳,۰۰۰ تومان"
            gradient="bg-gradient-to-r from-emerald-200 to-emerald-100"
          />
          <SummaryCard
            title="جمع برداشت"
            amount="۵۳,۰۰۰ تومان"
            gradient="bg-gradient-to-r from-rose-200 to-rose-100"
          />
          <SummaryCard
            title="مانده موجودی"
            amount="۵۳,۰۰۰ تومان"
            gradient="bg-gradient-to-r from-cyan-200 to-cyan-100"
          />
        </div>

        <RechargePanel />
      </div>
    </div>
  );
}
