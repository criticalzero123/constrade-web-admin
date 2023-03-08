import React from "react";

import SideNav from "../../Components/DashboardComponents/Nav";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  const currentlocation = location.pathname.split("/");
  const path = currentlocation[currentlocation.length - 1];

  return (
    <div className="flex text-white ">
      <aside className="fixed">
        <SideNav />
      </aside>

      <main className="flex flex-col gap-5 ml-52 w-screen pr-5 py-5">
        {/* Header */}
        <div className="flex justify-between place-items-center ">
          <div>
            <div className="flex items-center flex-wrap">
              <p className="text-sm opacity-80 font-medium">Dashboard /</p>
              <p className="text-white opacity-100 capitalize text-sm font-medium ml-1">
                {path !== "dashboard" && path}
              </p>
            </div>
            <h1 className="font-bold text-2xl capitalize">{path}</h1>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
