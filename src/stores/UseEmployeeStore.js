import { create } from "zustand";
import { addEmployee, fetchEmployees } from "../services/employeeService";

const useEmployeeStore = create((set) => ({
  employees: [],

  addEmployee: async (newEmployee) => {
    try {
      const addedEmployee = await addEmployee(newEmployee);
      set((state) => ({
        employees: [...state.employees, addedEmployee],
      }));
    } catch (error) {
      console.error(error.message);
    }
  },

  fetchEmployees: async () => {
    try {
      const employeesFromApi = await fetchEmployees();
      set({ employees: employeesFromApi });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useEmployeeStore;
