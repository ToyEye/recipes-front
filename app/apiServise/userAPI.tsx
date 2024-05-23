import axios from "axios";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

type TAuth = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const signup = async (credentials: TAuth) => {
  const { data } = await axios.post("/users/signup", credentials);
  setToken(data.token);
  return data;
};

export const signin = async (credentials: TAuth) => {
  const { data } = await axios.post("/users/signin", credentials);
  setToken(data.token);

  return data;
};

export const logout = async () => {
  await axios.post("/users/logout");
  clearToken();
};

export const getCurrent = async () => {
  await axios.get("/users/current");
};
