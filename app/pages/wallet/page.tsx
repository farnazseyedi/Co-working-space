"use client";

import NavigatinBar from "../../components/Navigation/NavigationBar";
import HomeIcon from "@/app/assets/icons/header/HomeIcon";
import VectorIcon from "@/app/assets/icons/header/VectorIcon";
import WalletPanel from "../../components/wallet/WalletDashboard";

export default function Dashboard() {
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
      </div>
    </div>
  );
}
