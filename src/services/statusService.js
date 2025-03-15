import axios from "./axios";

export const fetchStatuses = async () => {
  try {
    const response = await axios.get("/statuses");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching statuses");
  }
};
