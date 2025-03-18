import { create } from "zustand";
import {
  fetchTasks,
  addTask,
  fetchCurrentTask,
  updateTaskStatus,
} from "../services/taskService";

const useTaskStore = create((set) => ({
  tasks: [],
  currentTask: null,

  fetchTasks: async () => {
    try {
      const tasksFromAPI = await fetchTasks();
      set({ tasks: tasksFromAPI });
    } catch (error) {
      console.error(error.message);
    }
  },

  fetchCurrentTask: async (id) => {
    try {
      const task = await fetchCurrentTask(id);
      set({ currentTask: task });
    } catch (error) {
      console.error(error.message);
    }
  },

  addTask: async (newTask) => {
    try {
      const addedTask = await addTask(newTask);
      set((state) => ({
        tasks: [...state.tasks, addedTask],
      }));
    } catch (error) {
      console.error(error.message);
    }
  },
  updateTaskStatus: async (taskId, statusId) => {
    try {
      await updateTaskStatus(taskId, statusId);
      set((state) => ({
        currentTask: { ...state.currentTask, status: { id: statusId } },
      }));
    } catch (error) {
      console.error(error.message);
    }
  },
}));

export default useTaskStore;
