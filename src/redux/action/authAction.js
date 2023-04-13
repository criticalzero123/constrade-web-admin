import api from "../../utility/api";

export const loginAdmin = async (username, password) => {
  try {
    const res = await api.get(
      `/auth/login?username=${username}&password=${password}`
    );

    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const registerAdmin = async (username, password, key) => {
  try {
    const res = await api.post(
      `/auth/register?username=${username}&password=${password}&key=${key}`
    );

    if (!res.data.responseData) {
      alert("Key is wrong!");
      return;
    }
    alert("successfully created!");

    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};
