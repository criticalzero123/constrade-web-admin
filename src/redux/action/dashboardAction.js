import api from "../../utility/api";

export const getAllCount = async () => {
  try {
    const res = await api.get("/dashboard/count/all");

    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};
