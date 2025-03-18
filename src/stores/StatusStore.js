import { create } from "zustand";
import { fetchStatuses } from "../services/statusService";

const useStatusStore = create((set) => ({
  statuses: [],

  fetchStatuses: async () => {
    try {
      const data = await fetchStatuses();
      set({ statuses: data });
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useStatusStore;
