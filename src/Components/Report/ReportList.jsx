import React from "react";
import { useDispatch } from "react-redux";
import { productDelete } from "../../redux/action/productAction";
import { blockUser } from "../../redux/action/userAction";
import { reportType } from "../../utility/enums";
import {
  communityDelete,
  communityPostCommentDelete,
  communityPostDelete,
} from "../../redux/action/communityAction";
import { cancelReport } from "../../redux/action/reportAction";

const ReportList = ({ report, user, person }) => {
  const dispatch = useDispatch();

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

  const deleteByReportType = (reportNumber, id, reportId) => {
    switch (reportNumber) {
      case reportType.User:
        dispatch(blockUser(id, reportId));
        break;

      case reportType.Product:
        dispatch(productDelete(id, reportId));
        break;
      case reportType.Community:
        dispatch(communityDelete(id, reportId));
        break;

      case reportType.CommunityPost:
        dispatch(communityPostDelete(id, reportId));
        break;
      case reportType.CommunityPostComment:
        dispatch(communityPostCommentDelete(id, reportId));
        break;

      default:
        return "error";
    }
  };

  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
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
        <p>Id Reported: {report.idReported}</p>
      </div>
      <div>
        <p>{reportTypeToString(report.reportType)}</p>
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
        onClick={() => dispatch(cancelReport(report.reportId))}
      >
        cancel
      </p>
    </div>
  );
};

export default ReportList;
