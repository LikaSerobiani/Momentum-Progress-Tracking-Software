import { create } from "zustand";
import { addEmployee, fetchEmployees } from "../services/employeeService";

const useEmployeeStore = create((set) => ({
  employees: [],

  addEmployee: async (newEmployee) => {
    try {
      const addedEmployee = await addEmployee(newEmployee);

      set((state) => {
        if (!state.employees.some((emp) => emp.id === addedEmployee.id)) {
          return { employees: [...state.employees, addedEmployee] };
        }
        return state;
      });
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
