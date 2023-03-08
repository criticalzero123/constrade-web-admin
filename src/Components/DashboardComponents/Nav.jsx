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
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-[rgba(255,255,255,0.13)] text-white p-4 h-screen flex justify-around flex-col text-sm">
      <div>
        <img className="h-16 w-16" src={AppLogo} alt="User profile" />
      </div>

      {/* Navigations */}
      <div>
        <ul>
          <li className="py-3 mb-2 rounded-sm px-3 bg-red-500">
            <a href="">
              <MdDashboard
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Dashboard
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <MdSupervisedUserCircle
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Accounts
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <MdShoppingCart
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Products
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <IoIosWallet
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Wallets
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <MdSupervisorAccount
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Communities
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <MdFeedback
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              User feedbacks
            </a>
          </li>

          <li className="py-3 mb-2 rounded-sm px-3 opacity-80">
            <a href="">
              <MdBugReport
                size={18}
                className="inline-block align-text-bottom mr-2"
              />
              Bug Reports
            </a>
          </li>
        </ul>
      </div>

      {/* Admin account */}
      <div className="text-center justify-self-end rounded-sm px-2 py-5 bg-[rgba(255,255,255,0.13)]">
        <img
          className="rounded-full h-16 w-16 mx-auto mb-2 border-4 border-red-500"
          src={Avatar}
          alt="User profile"
        />
        <h3 className="font-base font-bold mb-1 ">James Dylan</h3>
        <p className="text-xs tracking-wider opacity-80">ADMIN</p>
        <button className="py-3 w-full mt-5 bg-red-500 rounded-sm">
          <MdOutlineLogout
            size={18}
            className=" inline-block align-text-bottom  mr-2"
          />
          Logout
        </button>
      </div>
    </nav>
  );
}
