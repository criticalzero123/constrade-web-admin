import React from "react";
import { Outlet } from "react-router-dom";

const WalletRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WalletRoute;
