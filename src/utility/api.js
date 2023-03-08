import axios from "axios";
const createApi = () => {
  const url = process.env.REACT_APP_API_URL;

  const _config = axios.create({
    baseURL: url,
    timeout: 5000,
  });

  return {
    get: _config.get,
    post: _config.post,
    put: _config.put,
    delete: _config.delete,
  };
};

const api = createApi();

export default api;
