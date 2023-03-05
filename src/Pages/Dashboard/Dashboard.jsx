import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../Components/DashboardComponents/SideNav";

export default function Dashboard() {
  return (
    <div className="wrapper bg-black grid grid-cols-6 gap-4">
      <div className="md:grid-cols-2">
        <SideNav />
      </div>

      <div className="md:grid-cols-4">
        <Outlet />
      </div>
    </div>
  );
}
