import React from "react";

import List from "./UserList";

// Icon assets
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DashboardCards(props) {
  const { title, description, path } = props;

  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}
      <Link to={`/dashboard/${path}`}>
        <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
          {/* TODO: Encapsulate whole header to an outlet, whole header container should be clickable */}
          <div>
            <h3>{title}</h3>
            <p className="text-sm opacity-80 font-normal mt-1">{description}</p>
          </div>
          <MdOutlineChevronRight size={24} />
        </div>
      </Link>

      {/* List contents  */}
      <div>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </section>
  );
}
