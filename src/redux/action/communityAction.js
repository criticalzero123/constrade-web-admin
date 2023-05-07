import api from "../../utility/api";

export const communityDelete = async (id, reportId) => {
  try {
    const res = await api.delete(`/community/${id}?reportId=${reportId}`);

    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const communityPostDelete = async (id, reportId) => {
  try {
    const res = await api.delete(`/community/post/${id}?reportId=${reportId}`);

    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const communityPostCommentDelete = async (id, reportId) => {
  try {
    const res = await api.delete(
      `/community/post/comment/${id}?reportId=${reportId}`
    );

    return res.data.responseData;
  } catch (error) {
    console.log(error);
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

export const getCommunityPost = (id) => async (dispatch) => {
  dispatch({ type: "GET_COMMUNITY_POST_REQUEST" });
  try {
    const res = await api.get(`/community/post/${id}`);

    dispatch({
      type: "GET_COMMUNITY_POST_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_COMMUNITY_POST_ERROR", error: error });
  }
};

export const getCommunityPostComment = (id) => async (dispatch) => {
  dispatch({ type: "GET_COMMUNITY_POST_COMMENT_REQUEST" });
  try {
    const res = await api.get(`/community/post/comment/${id}`);

    dispatch({
      type: "GET_COMMUNITY_POST_COMMENT_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_COMMUNITY_POST_COMMENT_ERROR", error: error });
  }
};
