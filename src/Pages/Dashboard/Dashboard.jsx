import React from "react";

import SideNav from "../../Components/DashboardComponents/Nav";
import Analytics from "../Analytics/Analytics";
import DashboardCards from "../../Components/DashboardComponents/DashboardCards";

import { MdNotifications, MdChatBubble, MdSettings } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="flex text-white ">
      <aside className="fixed">
        <SideNav />
      </aside>

      <main className="flex flex-col gap-5 ml-52 w-screen pr-5 py-5">
        {/* Header */}
        <div className="flex justify-between place-items-center ">
          <div>
            <p className="text-sm opacity-80 mb-3 font-medium">
              Dashboard / Overview
            </p>
            <h1 className="font-bold text-2xl">Dashboard</h1>
          </div>

          {/* Icons */}
          <div className="flex gap-8">
            <MdNotifications size={24} />
            <MdChatBubble size={24} />
            <MdSettings size={24} />
          </div>
        </div>
        <Analytics />

        <DashboardCards />
        {/* Status cards */}
        <section className="flex gap-3">
          <DashboardCards />
          <DashboardCards />
        </section>
      </main>
    </div>
  );
}
