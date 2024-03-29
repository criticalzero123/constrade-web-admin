import React from "react";
import ReportList from "../../Components/Report/ReportList";
import { useReport } from "../../hooks/report/useReport";

const Report = () => {
  const [
    reports,
    cancelReport,
    alertUser,
    blockUser,
    productDelete,
    communityDelete,
    communityPostDelete,
    communityPostCommentDelete,
  ] = useReport();

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
      <div className="grid grid-cols-8 py-4 px-2 border-b text-center">
        <p>Name</p>
        <p>Type</p>
        <p>Reported ID</p>
        <p>Report Description</p>
        <p>Date Reported</p>
        <p></p>
        <p>Actions</p>
        <p></p>
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
              cancelReport={cancelReport}
              alertUser={alertUser}
              blockUser={blockUser}
              productDelete={productDelete}
              communityDelete={communityDelete}
              communityPostDelete={communityPostDelete}
              communityPostCommentDelete={communityPostCommentDelete}
            />
          ))}
      </div>
    </section>
  );
};

export default Report;
