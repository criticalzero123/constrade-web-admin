import api from "../../utility/api";

export const communityDelete = (id, reportId) => async (dispatch) => {
  dispatch({ type: "COMMUNITY_DELETE_REQUEST" });
  try {
    const res = await api.delete(`/community/${id}?reportId=${reportId}`);

    dispatch({
      type: "COMMUNITY_DELETE_SUCCESS",
      payload: res.data.responseData,
    });

    if (res.data.responseData) {
      alert("Community Deleted");
    } else {
      alert("Community not deleted");
    }
  } catch (error) {
    dispatch({ type: "COMMUNITY_DELETE_ERROR", error: error });
  }
};

export const communityPostDelete = (id, reportId) => async (dispatch) => {
  dispatch({ type: "COMMUNITY_POST_DELETE_REQUEST" });
  try {
    const res = await api.delete(`/community/post/${id}?reportId=${reportId}`);

    dispatch({
      type: "COMMUNITY_POST_DELETE_SUCCESS",
      payload: res.data.responseData,
    });

    if (res.data.responseData) {
      alert("Community Post Deleted");
    } else {
      alert("Community Post not deleted");
    }
  } catch (error) {
    dispatch({ type: "COMMUNITY_POST_DELETE_ERROR", error: error });
  }
};

export const communityPostCommentDelete =
  (id, reportId) => async (dispatch) => {
    dispatch({ type: "COMMUNITY_POST_COMMENT_DELETE_REQUEST" });
    try {
      const res = await api.delete(
        `/community/post/comment/${id}?reportId=${reportId}`
      );

      dispatch({
        type: "COMMUNITY_POST_COMMENT_DELETE_SUCCESS",
        payload: res.data.responseData,
      });

      if (res.data.responseData) {
        alert("Community Post comment Deleted");
      } else {
        alert("Community Post comment not deleted");
      }
    } catch (error) {
      dispatch({ type: "COMMUNITY_POST_COMMENT_DELETE_ERROR", error: error });
    }
  };

export const getCommunity = () => async (dispatch) => {
  dispatch({ type: "GET_COMMUNITY_REQUEST" });
  try {
    const res = await api.get(`/community`);

    dispatch({
      type: "GET_COMMUNITY_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_COMMUNITY_ERROR", error: error });
  }
};
