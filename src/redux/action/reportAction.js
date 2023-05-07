import api from "../../utility/api";

export const getAllReport = async () => {
  try {
    const res = await api.get("/report");
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const cancelReport = async (id) => {
  try {
    const res = await api.delete(`/report/${id}`);
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};
