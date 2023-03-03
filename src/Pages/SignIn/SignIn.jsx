import React from "react";

// Import assets
import appLogo from "../../Assets/App-Dark.svg";

const SignIn = () => {
  return (
    <section className="bg-black h-screen flex justify-center items-center">
      <div className="wrapper h-2/3 w-80 flex flex-col ">
        <div className="">
          <img className=" h-32 mb-4 mx-auto " src={appLogo} alt="Constrade Logo" />
          <h1 className=" text-white font-bold text-2xl text-center mb-8 opacity-90 ">ADMIN LOGIN</h1>
        </div>
        <div className=" text-left">
          <h3 className=" text-white pb-3 text-base opacity-90">Username</h3>
          <input className="mb-5 px-3 py-3 w-full rounded-sm " type="text" name="" id="username" />

          <h3 className=" text-white pb-3 text-base opacity-90">Password</h3>
          <input className="mb-8 px-3 py-3 w-full rounded-sm " type="text" name="" id="password" />
        </div>
        <div>
          <button className="bg-[#e6592e] hover:bg-[#ae4221] w-full py-4 rounded-sm font-bold text-[#FCFBFA] text-base tracking-wide ">LOGIN</button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
