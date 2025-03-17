import axios from "./axios";

export const fetchComments = async (taskId) => {
  try {
    const response = await axios.get(`/tasks/${taskId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching comments");
  }
};

export const addComment = async (taskId, text, parentId = null) => {
  try {
    const response = await axios.post(`/tasks/${taskId}/comments`, {
      text,
      parent_id: parentId,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding comment");
  }
};
