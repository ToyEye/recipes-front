import axios from "axios";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

export const getCountries = async () => {
  const { data } = await axios.get("/countries");

  return data;
};
