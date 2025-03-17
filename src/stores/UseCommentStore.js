import { create } from "zustand";
import { fetchComments, addComment } from "../services/commentService";

const useCommentStore = create((set) => ({
  comments: [],
  fetchComments: async (taskId) => {
    try {
      const response = await fetchComments(taskId);
      set({ comments: response });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  },
  addComment: async (taskId, text, parentId = null) => {
    try {
      const response = await addComment(taskId, text, parentId);
      set((state) => {
        if (parentId) {
          return {
            comments: state.comments.map((comment) =>
              comment.id === parentId
                ? {
                    ...comment,
                    sub_comments: [...(comment.sub_comments || []), response],
                  }
                : comment
            ),
          };
        } else {
          return { comments: [response, ...state.comments] };
        }
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  },
}));

export default useCommentStore;
