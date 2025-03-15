import axios from "./axios";

export const fetchDepartments = async () => {
  try {
    const response = await axios.get("/departments");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching departments");
  }
};
