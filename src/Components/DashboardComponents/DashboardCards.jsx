import React from "react";

import List from "../DashboardComponents/VerificationList";

// Icon assets
import { MdOutlineChevronRight } from "react-icons/md";

export default function DashboardCards() {
  return (
    // TODO: Should be dynamic. Change card context using props
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}
      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        {/* TODO: Encapsulate whole header to an outlet, whole header container should be clickable */}
        <div>
          <h3>Pending verifications</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            See pending user verifications
          </p>
        </div>
        <MdOutlineChevronRight size={24} />
      </div>

      {/* List contents  */}
      <div>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </section>
  );
}
