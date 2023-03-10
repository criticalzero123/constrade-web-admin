import React from "react";

const TableComponent = ({ title, description, children }) => {
  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>{title}</h3>
          <p className="text-sm opacity-80 font-normal mt-1">{description}</p>
        </div>
      </div>

      {/* List contents  */}
      {children}
    </section>
  );
};

export default TableComponent;
