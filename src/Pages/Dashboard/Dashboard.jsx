import React from "react";
import { Outlet } from "react-router-dom";

import SideNav from "../../Components/DashboardComponents/Nav";
import Analytics from "../Analytics/Analytics";
export default function Dashboard() {
  return (
    <div className="flex">
      <aside className="fixed">
        <SideNav />
      </aside>

      <main className=" ml-52 w-screen pr-5">
        <Analytics />
      </main>
    </div>
  );
}
