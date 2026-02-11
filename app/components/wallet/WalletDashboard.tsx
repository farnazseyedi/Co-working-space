"use client";

import React from "react";
import SummaryCard from "./SummaryCard";
import RechargePanel from "./RechargePanel";
import Low from "@/app/assets/icons/wallet/Low";
import Sum from "@/app/assets/icons/wallet/Sum";
import Remaining from "@/app/assets/icons/wallet/Remaining";
import Upper from "../../../public/wallet/upper.svg";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-26">
          <SummaryCard
            title={
              <div className="flex items-center gap-2">
                <Sum className="w-5 h-5 text-gray-600" />
                <span>جمع واریزی</span>
              </div>
            }
            amount="۵۳,۰۰۰ تومان"
            bgImage={Upper}
          />

          <SummaryCard
            title={
              <div className="flex items-center gap-2">
                <Low className="w-5 h-5 text-gray-600" />
                <span>جمع برداشت</span>
              </div>
            }
            amount="۵۳,۰۰۰ تومان"
            bgImage="/wallet/upper1.svg"
          />

          <SummaryCard
            title={
              <div className="flex items-center gap-2">
                <Remaining className="w-5 h-5 text-gray-600" />
                <span>مانده موجودی</span>
              </div>
            }
            amount="۵۳,۰۰۰ تومان"
            bgImage="/wallet/upper2.svg"
          />
        </div>

        <RechargePanel />
      </div>
    </div>
  );
}
