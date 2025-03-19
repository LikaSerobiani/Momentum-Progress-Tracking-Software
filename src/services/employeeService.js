import axios from "./axios";
import useEmployeeStore from "../stores/EmployeeStore";

export const addEmployee = async (employee) => {
  const { fetchEmployees } = useEmployeeStore.getState();

  try {
    const response = await axios.post("/employees", employee, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    await fetchEmployees();

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
