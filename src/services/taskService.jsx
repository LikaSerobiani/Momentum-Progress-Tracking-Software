import axios from "./axios";

export const fetchTasks = async () => {
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching tasks");
  }
};

export const fetchCurrentTask = async (id) => {
  try {
    const response = await axios.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching task");
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post("/tasks", task, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding task");
  }
};
