import axios from "./axios";

export const addEmployee = async (employee) => {
  try {
    const response = await axios.post("/employees", employee, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding employee");
  }
};

export const fetchEmployees = async () => {
  try {
    const response = await axios.get("/employees");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching employees");
  }
};
