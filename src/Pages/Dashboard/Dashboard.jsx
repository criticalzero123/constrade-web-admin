import React from "react";
import SideNav from "../../Components/DashboardComponents/SideNav";

export default function Dashboard() {
  return (
    <div className="wrapper bg-black">
      <section className="side-nav">
        <SideNav />
      </section>
      <section className="analytics"></section>
      <section className="context-screen"></section>
    </div>
  );
}
