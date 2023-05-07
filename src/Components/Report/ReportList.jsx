import React from "react";
import { reportType } from "../../utility/enums";

const ReportList = ({
  report,
  user,
  person,
  cancelReport,
  alertUser,
  blockUser,
  productDelete,
  communityDelete,
  communityPostDelete,
  communityPostCommentDelete,
}) => {
  const reportTypeToString = (reportNumber) => {
    switch (reportNumber) {
      case reportType.User:
        return "User";

      case reportType.Product:
        return "Product";

      case reportType.Community:
        return "Community";

      case reportType.CommunityPost:
        return "Community Post";

      case reportType.CommunityPostComment:
        return "Community Post Comment";

      default:
        return "error";
    }
  };

  const deleteByReportType = async (reportNumber, id, reportId) => {
    switch (reportNumber) {
      case reportType.User:
        await blockUser(id, reportId);
        break;

      case reportType.Product:
        await productDelete(id, reportId);
        break;
      case reportType.Community:
        await communityDelete(id, reportId);
        break;

      case reportType.CommunityPost:
        await communityPostDelete(id, reportId);
        break;
      case reportType.CommunityPostComment:
        await communityPostCommentDelete(id, reportId);
        break;

      default:
        return "error";
    }
  };

  return (
    <div className="grid grid-cols-8 gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <div className="flex gap-2 place-items-center">
        <img
          className="rounded-full h-8 w-8 object-cover"
          src={user.imageUrl}
          alt="User profile"
        />
        <div>
          <p className="text-md capitalize">
            {person.firstName} {person.lastName}
          </p>
          <p className="text-xs opacity-80 font-normal uppercase">
            {user.userType}
          </p>
        </div>
      </div>

      <div>
        <p>{reportTypeToString(report.reportType)}</p>
      </div>
      <div>
        <p>Id Reported: {report.idReported}</p>
      </div>
      <div>
        <p>{report.description}</p>
      </div>
      <p className="text-sm opacity-80 font-normal">
        {new Date(report.dateSubmitted).toLocaleDateString()}
      </p>
      <p
        className="text-sm opacity-80 font-normal text-red-500 cursor-pointer"
        onClick={() =>
          deleteByReportType(
            report.reportType,
            report.idReported,
            report.reportId
          )
        }
      >
        {report.reportType === reportType.User ? "block" : "delete"}
      </p>

      <p
        className="text-sm opacity-80 font-normal text-red-500 cursor-pointer"
        onClick={() => cancelReport(report.reportId)}
      >
        cancel
      </p>
      {report.reportType === reportType.User && (
        <p
          className="cursor-pointer text-red-500"
          onClick={() => alertUser(report.reportId, report.idReported)}
        >
          alert
        </p>
      )}
    </div>
  );
};

export default ReportList;
