import React, { useState } from "react";

// Import image asset
import appLogo from "../../Assets/App-Dark.svg";
import { registerAdmin } from "../../redux/action/authAction";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  return (
    <form
      className="bg-black h-screen flex justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();

        registerAdmin(username, password, key);
      }}
    >
      <div className="wrapper h-2/3 w-80 flex flex-col mb-20">
        <div>
          <img
            className=" h-32 mb-4 mx-auto "
            src={appLogo}
            alt="Constrade Logo"
          />
          <h1 className=" text-white font-bold text-2xl text-center mb-8 opacity-90 ">
            ADMIN REGISTER
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <h3 className=" text-white pb-3 text-base opacity-90">Password</h3>
          <input
            className="mb-8 px-3 py-3 w-full rounded-sm "
            type="password"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className=" text-white pb-3 text-base opacity-90">Key</h3>
          <input
            className="mb-8 px-3 py-3 w-full rounded-sm "
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <button className="bg-[#e6592e] hover:bg-[#ae4221] py-4 w-full rounded-sm font-bold text-[#FCFBFA] text-base tracking-wide text-center cursor-pointer">
          REGISTER
        </button>
      </div>
    </form>
  );
};

export default SignUp;
