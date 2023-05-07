import { useEffect, useState } from "react";
import { getAllReport, cancelReport } from "../../redux/action/reportAction";
import { blockUser } from "../../redux/action/userAction";
import { productDelete } from "../../redux/action/productAction";
import {
  communityDelete,
  communityPostCommentDelete,
  communityPostDelete,
} from "../../redux/action/communityAction";
import { alertUser } from "../../redux/action/userAction";

export const useReport = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllReport();

      setData(res);
    };

    fetch();
  }, []);

  const handleBlockUser = async (id, reportId) => {
    const res = await blockUser(id, reportId);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("User Ban");
    } else {
      alert("User did not Ban");
    }
  };

  const handleDeleteProduct = async (id, reportId) => {
    const res = await productDelete(id, reportId);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("Product Delete");
    } else {
      alert("Something went wrong in deleting product");
    }
  };

  const handleDeleteCommunity = async (id, reportId) => {
    const res = await communityDelete(id, reportId);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("Community Delete");
    } else {
      alert("Something went wrong in deleting community");
    }
  };

  const handleDeleteCommunityPost = async (id, reportId) => {
    const res = await communityPostDelete(id, reportId);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("Community post  Delete");
    } else {
      alert("Something went wrong in deleting community post");
    }
  };

  const handleDeleteCommunityPostComment = async (id, reportId) => {
    const res = await communityPostCommentDelete(id, reportId);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("Comment  Delete");
    } else {
      alert("Something went wrong in deleting comment");
    }
  };

  const handleAlertUser = async (reportId, idReported) => {
    const res = await alertUser(idReported, reportId);

    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("User Alerted!");
    } else {
      alert("Something went wrong alerting User!");
    }
  };

  const handleCancel = async (reportId) => {
    const res = await cancelReport(reportId);
    console.log(res, data);
    if (res) {
      const newData = data.filter((r) => r.report.reportId !== reportId);
      setData(newData);
      alert("User alert");
    } else {
      alert("Something went wrong in alerting user");
    }
  };

  return [
    data,
    handleCancel,
    handleAlertUser,
    handleBlockUser,
    handleDeleteProduct,
    handleDeleteCommunity,
    handleDeleteCommunityPost,
    handleDeleteCommunityPostComment,
  ];
};
