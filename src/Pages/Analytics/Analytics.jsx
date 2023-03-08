import React from "react";

import {
  MdTrendingUp,
  MdTrendingDown,
  MdVideogameAsset,
  MdPeopleAlt,
  MdVerifiedUser,
  MdReceiptLong,
} from "react-icons/md";

export default function Analytics() {
  return (
    <section className="">
      <h1 className="font-bold text-2xl text-white mt-3 py-4">Dashboard</h1>
      {/* Product, Users, Transactions, User reports, Feedbacks, Bugs */}
      <div className="cards flex mt-2 gap-8">
        <article className="text-white bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] pt-5 px-4 rounded-sm grow">
          <h3 className="opacity-70 ">Total transactions</h3>
          <p className=" text-3xl mt-3 tracking-wider font-bold">
            <MdReceiptLong className="inline-block mr-2" size={32} />
            23,667
          </p>

          <div className="tags flex gap-3 py-3">
            <p className="text-sm py-1 rounded-full text-green-500">
              <MdTrendingUp className="inline-block mr-2" size={24} />
              21,434 today
            </p>
          </div>
        </article>

        <article className="text-white bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] pt-5 px-4 rounded-sm grow">
          <h3 className="opacity-70 ">Total users</h3>
          <p className=" text-3xl mt-3 tracking-wider font-bold">
            <MdPeopleAlt className="inline-block mr-2" size={32} />
            140,889
          </p>

          <div className="tags flex gap-3 py-3">
            <p className="text-sm py-1 rounded-full text-green-500">
              <MdVerifiedUser className="inline-block mr-2" size={24} />
              102,238 verified users
            </p>
          </div>
        </article>

        <article className="text-white bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] pt-5 px-4 rounded-sm grow">
          <h3 className="opacity-70 ">Total products</h3>
          <p className=" inline-block text-3xl mt-3 tracking-wider font-bold">
            <MdVideogameAsset className="inline-block mr-2" size={32} />
            23,667
          </p>

          <div className="tags flex gap-3 py-3">
            <p className="text-sm py-1 text-red-500">
              <MdTrendingDown className="inline-block mr-2" size={24} />
              &#60; &nbsp; 2,138 than last month
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
