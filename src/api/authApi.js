import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("/users/login", data);
    return response.data;
  } catch (err) {
    throw err.response.data || { message: "Unknown error" };
  }
};
