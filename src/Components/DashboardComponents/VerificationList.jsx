import React from "react";

import Avatar from "../../Assets/avatar.png";

export default function VerificationList() {
  return (
    // TODO: Should be dynamic. Modify using props
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <div className="flex gap-2 place-items-center">
        <img className="rounded-full h-8 w-8" src={Avatar} alt="User profile" />
        <div>
          <p className="text-sm">James Dylan</p>
          <p className="text-sm opacity-80 font-normal">Non - verified</p>
        </div>
      </div>
      <p className="text-sm opacity-80 font-normal">02 Mar, 2023</p>
      <p className="text-sm opacity-80 font-normal">Untracked</p>
    </div>
  );
}
