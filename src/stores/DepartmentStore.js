import { create } from "zustand";
import { fetchDepartments } from "../services/departmentService";

const useDepartmentStore = create((set) => ({
  departments: [],

  fetchDepartments: async () => {
    try {
      const data = await fetchDepartments();
      set({ departments: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useDepartmentStore;
