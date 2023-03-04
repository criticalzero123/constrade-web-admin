import React from "react";

import { Link } from "react-router-dom";

// Import image asset
import appLogo from "../../assets/App-Dark.svg";

const SignIn = () => {
  return (
    <section className="bg-black h-screen flex justify-center items-center">
      <div className="wrapper h-2/3 w-80 flex flex-col mb-20">
        <div>
          <img
            className=" h-32 mb-4 mx-auto "
            src={appLogo}
            alt="Constrade Logo"
          />
          <h1 className=" text-white font-bold text-2xl text-center mb-8 opacity-90 ">
            ADMIN LOGIN
          </h1>
        </div>
        <div className=" text-left">
          {/* Username */}
          <h3 className=" text-white pb-3 text-base opacity-90">Username</h3>
          <input
            className="mb-5 px-3 py-3 w-full rounded-sm "
            type="text"
            name=""
            id="username"
          />

          {/* Password */}
          <h3 className=" text-white pb-3 text-base opacity-90">Password</h3>
          <input
            className="mb-8 px-3 py-3 w-full rounded-sm "
            type="password"
            name=""
            id="password"
          />
        </div>
        {/* Login Button */}

        <Link
          to="/dashboard"
          className="bg-[#e6592e] hover:bg-[#ae4221] py-4 w-full rounded-sm font-bold text-[#FCFBFA] text-base tracking-wide text-center"
        >
          LOGIN
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
