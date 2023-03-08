import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../Components/DashboardComponents/Nav";

export default function Dashboard() {
  return (
    <div className="flex bg-black">
      <aside>
        <SideNav />
      </aside>

      <main></main>
    </div>
  );
}
