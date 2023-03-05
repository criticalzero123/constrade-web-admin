import React from "react";
import SideNav from "../../Components/DashboardComponents/SideNav";
import Statistics from "../../Components/DashboardComponents/Analytics";

export default function Dashboard() {
  return (
    <div className="wrapper bg-black flex">
      <SideNav />

      <div className=" grow ">
        <section className="py-4 px-8">
          <h1 className="font-bold text-white text-2xl mb-4 mt-6">Dashboard</h1>
          <Statistics />
        </section>
        <section className="context-screen"></section>
      </div>
    </div>
  );
}
