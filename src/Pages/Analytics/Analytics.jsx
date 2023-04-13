import React from "react";

import {
  MdTrendingUp,
  MdVideogameAsset,
  MdPeopleAlt,
  MdVerifiedUser,
} from "react-icons/md";
import UserStatistic from "../../Components/DashboardComponents/UserStatistic";
import useGetCount from "../../hooks/dashboard/useGetCount";
import ProductStatistic from "../../Components/DashboardComponents/ProductStatistic";
export default function Analytics() {
  const [data] = useGetCount();
  if (data === undefined) return;
  return (
    <>
      <section>
        {/* Product, Users, Transactions, User reports, Feedbacks, Bugs */}
        <div className="cards grid grid-cols-2 mt-2 gap-3 mb-5">
          <article className="text-white bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] pt-5 px-4 rounded-sm grow">
            <h3 className="opacity-70 ">Total users</h3>
            <p className=" text-3xl mt-3 tracking-wider font-bold">
              <MdPeopleAlt className="inline-block mr-2" size={32} />
              {data.userCount}
            </p>

            <div className="tags flex gap-3 py-3">
              <p className="text-sm py-1 rounded-full text-green-500">
                <MdVerifiedUser className="inline-block mr-2" size={24} />
                {data.userVerifiedCount} Verified users
              </p>
            </div>
          </article>

          <article className="text-white bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] pt-5 px-4 rounded-sm grow">
            <h3 className="opacity-70 ">Total products</h3>
            <p className=" inline-block text-3xl mt-3 tracking-wider font-bold">
              <MdVideogameAsset className="inline-block mr-2" size={32} />
              {data.productCount}
            </p>

            <div className="tags flex gap-3 py-3">
              <p className="text-sm py-1 text-green-500">
                <MdTrendingUp className="inline-block mr-2" size={24} />
                {data.transactionCount} Total transacted
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* Status cards */}
      <section className="grid grid-cols-2 gap-3">
        <UserStatistic
          title={"User"}
          description={"See user analytics"}
          path={"account"}
          statistic={data.userStatistics}
        />
        <ProductStatistic
          title={"Product"}
          description={"See product analytics"}
          path={"product"}
          statistic={data.productStatistics}
        />
      </section>
    </>
  );
}
