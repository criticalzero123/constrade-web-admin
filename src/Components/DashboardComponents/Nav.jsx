import React from "react";
// Image assets
import Avatar from "../../Assets/avatar.png";
import AppLogo from "../../Assets/App Icon.png";

// Icon assets
import {
  MdSupervisorAccount,
  MdShoppingCart,
  MdSupervisedUserCircle,
  MdBugReport,
  MdFeedback,
  MdOutlineLogout,
  MdDashboard,
} from "react-icons/md";

import { IoIosWallet } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const currentlocation = location.pathname.split("/");
  const path = currentlocation[currentlocation.length - 1];

  const onActiveStyle = (destination) => {
    return path === destination
      ? "bg-red-500 hover:opacity-100"
      : "hover:bg-[rgba(255,255,255,0.10)] opacity-70";
  };

  return (
    <nav className="bg-[rgba(255,255,255,0.20)] text-white h-screen p-4 flex justify-around flex-col text-sm">
      <div>
        <img className="h-16 w-16" src={AppLogo} alt="User profile" />
      </div>

      {/* Navigations */}
      <div>
        <ul>
          <Link to="/dashboard">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "dashboard"
              )}`}
            >
              <MdDashboard
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/account">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "account"
              )}`}
            >
              <MdSupervisedUserCircle
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Accounts
            </li>
          </Link>
          <Link to="/dashboard/product">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "product"
              )}`}
            >
              <MdShoppingCart
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Products
            </li>
          </Link>
          <Link to="/dashboard/wallet">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle("wallet")}`}
            >
              <IoIosWallet
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Wallets
            </li>
          </Link>
          <Link to="/dashboard/community">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "community"
              )}`}
            >
              <MdSupervisorAccount
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Communities
            </li>{" "}
          </Link>
          <Link to="/dashboard/report">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle("report")}`}
            >
              <MdSupervisorAccount
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              User Reports
            </li>{" "}
          </Link>
          <Link to="/dashboard/feedback">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "user-feedback"
              )}`}
            >
              <MdFeedback
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              User feedbacks
            </li>
          </Link>
          <Link to="/dashboard/bug">
            <li
              className={`py-3 mb-2 rounded-sm px-3 ${onActiveStyle(
                "bug-report"
              )}`}
            >
              <MdBugReport
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Bug Reports
            </li>
          </Link>
        </ul>
      </div>

      {/* Admin account */}
      <div className="text-center justify-self-end rounded-sm px-2 py-5 bg-[rgba(255,255,255,0.13)]">
        <img
          className="rounded-full h-16 w-16 mx-auto mb-2 border-4 border-red-500"
          src={Avatar}
          alt="User profile"
        />
        <h3 className="text-base font-bold mb-1 ">James Dylan</h3>
        <p className="text-xs tracking-wider opacity-70">ADMIN</p>
        <Link to="/">
          <button className="py-3 w-full mt-5 bg-red-500 rounded-sm hover:bg-red-600">
            <MdOutlineLogout
              size={18}
              className=" inline-block align-text-bottom  mr-2"
            />
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}
