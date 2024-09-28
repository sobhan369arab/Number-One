import axios from "axios";
const baceURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baceURL: baceURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error.response.status >= 404 && error.response.status < 500) {
    alert("Client Error:", error.response.status);
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
