import axios from "./axios";

export const fetchPriorities = async () => {
  try {
    const response = await axios.get("/priorities");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching priorities");
  }
};
