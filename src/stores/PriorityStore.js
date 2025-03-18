import { create } from "zustand";
import { fetchPriorities } from "../services/priorityStore";

const usePriorityStore = create((set) => ({
  priorities: [],

  fetchPriorities: async () => {
    try {
      const data = await fetchPriorities();
      set({ priorities: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default usePriorityStore;
