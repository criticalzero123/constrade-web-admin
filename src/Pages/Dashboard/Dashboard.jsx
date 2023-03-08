import React from "react";

import SideNav from "../../Components/DashboardComponents/Nav";
import Analytics from "../Analytics/Analytics";
import DashboardCards from "../../Components/DashboardComponents/DashboardCards";

export default function Dashboard() {
  return (
    <div className="flex ">
      <aside className="fixed">
        <SideNav />
      </aside>

      <main className="flex flex-col gap-5 ml-52 w-screen pr-5 py-5">
        <h1 className="font-bold text-2xl text-white">Dashboard</h1>
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
