import React from "react";
import ReportList from "../../Components/Report/ReportList";
import { useReport } from "../../hooks/report/useReport";

const Report = () => {
  const [reports] = useReport();

  if (reports) {
    return (
      <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
        {/* Header */}

        <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
          <div>
            <h3>User Reports</h3>
            <p className="text-sm opacity-80 font-normal mt-1">
              This is a list of user reports
            </p>
          </div>
        </div>

        {/* List contents  */}
        <div>
          {reports &&
            reports.map((_report, index) => (
              <ReportList
                report={_report.report}
                user={_report.userInfo.user}
                person={_report.userInfo.person}
                key={index}
              />
            ))}
        </div>
      </section>
    );
  }
};

export default Report;
