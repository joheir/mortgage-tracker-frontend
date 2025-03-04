import axios from "axios";

const API_URL = "https://mt-backend-pxbv.onrender.com/";

export const getMortgageData = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};
