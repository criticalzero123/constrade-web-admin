import React from "react";

// Image assets
import Avatar from "../../Assets/avatar.png";

// Icon assets
import { 
  MdSupervisorAccount, 
  MdShoppingCart,
  MdSupervisedUserCircle,
  MdBugReport,
  MdFeedback ,
  MdOutlineLogout
} from "react-icons/md";

import { IoIosWallet } from "react-icons/io";

export default function SideNav() {
  return (
    <nav className="py-2 px-3 h-screen w-64 bg-[rgba(255,255,255,0.16)] text-white flex flex-col justify-around">
      <div className="admin-info text-center flex justify-center items-center">
        <div className="content">
          <img className="rounded-full h-16 w-16 mx-auto mb-4" src={Avatar} alt="User profile" />
          <h3 className="text-md opacity-90 text-base">James Dantes</h3>
          <p className="font-bold text-sm opacity-50 py-1">ADMIN</p>
        </div>
      </div>

      <div className="nav-list pl-3 mb-8">
        <h3 className="py-2 mt-4 mb-2 font-bold opacity-80">System management</h3>
        <ul>
          <li className="py-3 px-2 mb-2 rounded-sm hover:cursor-pointer text-[#e6592e] font-bold">
            <MdSupervisedUserCircle size={20} className="inline-block align-text-bottom mr-2"/>
            <p className="inline-block">Accounts</p>
          </li>
          <li className="py-3 px-2 mb-2 rounded-sm hover:bg-[rgba(255,255,255,0.08)] opacity-60 hover:cursor-pointer">
            <MdShoppingCart size={20} className="inline-block align-text-bottom mr-2"/>
            <p className="inline-block">Products</p>
          </li>
          <li className="py-3 px-2 mb-2 rounded-sm hover:bg-[rgba(255,255,255,0.08)] opacity-60 hover:cursor-pointer">
            <IoIosWallet size={20} className="inline-block align-text-bottom mr-2"/>
            <p className="inline-block">Wallet</p>
          </li>
          <li className="py-3 px-2 mb-2 rounded-sm hover:bg-[rgba(255,255,255,0.08)] opacity-60 hover:cursor-pointer">
            <MdSupervisorAccount size={20} className="inline-block align-text-bottom mr-2"/>
            <p className="inline-block">Communities</p>
          </li>
          
          <div className="reports">
            <h3 className="py-2 mt-4 font-bold opacity-80 mb-2">Report and Feedbacks</h3>
            <ul>
              <li className="py-3 px-2 mb-2 rounded-sm hover:bg-[rgba(255,255,255,0.08)] opacity-60 hover:cursor-pointer">
                <MdFeedback size={20} className="inline-block align-text-bottom mr-2"/>
                <p className="inline-block">User feedbacks</p>
              </li>
              <li className="py-3 px-2 mb-2 rounded-sm hover:bg-[rgba(255,255,255,0.08)] opacity-60 hover:cursor-pointer">
                <MdBugReport size={20} className="inline-block align-text-bottom mr-2"/>
                <p className="inline-block">Bug reports</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      <button className="bg-[#e6592e] hover:bg-[#ae4221] w-full py-4 rounded-sm font-bold text-[#FCFBFA] text-base tracking-wide align-middle">
        <MdOutlineLogout size={20} className=" inline-block align-text-bottom  mr-2"/>
        <p className="inline-block">Signout</p>
      </button>
    </nav>
  );
}
