import { useState, useEffect } from "react";
import useCommentStore from "../../../../stores/CommentStore";
import Textarea from "../../../common/TextArea";
import Button from "../../../common/Button";
import LeftIcon from "../../../common/icons/Left";

const CommentSection = ({ taskId }) => {
  const { comments, fetchComments, addComment } = useCommentStore();
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    fetchComments(taskId);
  }, [taskId, fetchComments]);

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    await addComment(taskId, newComment);
    setNewComment("");
  };

  const handleReplySubmit = async (parentId) => {
    if (!replyText.trim()) return;
    await addComment(taskId, replyText, parentId);
    setReplyingTo(null);
    setReplyText("");
  };

  const getTotalComments = () => {
    return comments.reduce(
      (total, comment) => total + 1 + (comment.sub_comments?.length || 0),
      0
    );
  };

  return (
    <div className="p-[45px] bg-[#F8F3FEA6] border-[0.3px] border-[#DDD2FF] rounded-[10px] w-[741px]">
      {/* write comment section */}
      <Textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        disableValidation={true}
        showCommentButton={true}
        placeholder="დაწერე კომენტარი"
        onSubmit={handleSubmit}
        borderRadius="10px"
      />

      {/* total comments  */}
      <div className="mt-[66px]">
        <div className="flex items-center mb-10 gap-[7px]">
          <p className="text-[20px] leading-[100%] text-firaGo font-bold">
            კომენტარები
          </p>
          <div className="bg-primary rounded-[30px] h-[22px] flex items-center justify-center px-[10px]">
            <span className="font-firaGo text-white text-[14px] leading-[100%] font-medium">
              {getTotalComments()}
            </span>
          </div>
        </div>

        {comments.map((comment) => (
          <div key={comment.id} className="py-2">
            {/* comment */}
            <div className="flex gap-2">
              <img
                src={comment.author_avatar}
                alt="avatar"
                className="w-[38px] h-[38px] rounded-[40px] object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[8px] font-firaGo">
                  <span className="font-bold text-[18px] text-gray-headline leading-[100%]">
                    {comment.author_nickname}
                  </span>
                  <p className="text-[16px] text-gray-subheadline font-[350px] leading-[100%]">
                    {comment.text}
                  </p>
                </div>
                <Button
                  title="უპასუხე"
                  variant="reply"
                  onClick={() =>
                    setReplyingTo(replyingTo === comment.id ? null : comment.id)
                  }
                >
                  <LeftIcon />
                </Button>
              </div>
            </div>

            {/* reply input */}
            {replyingTo === comment.id && (
              <div className="mt-2 ml-4">
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="უპასუხე"
                  disableValidation={true}
                  showCommentButton={true}
                  onSubmit={() => handleReplySubmit(comment.id)}
                  borderRadius="10px"
                />
              </div>
            )}

            {/* sub_comments */}
            {comment.sub_comments?.length > 0 && (
              <div className="flex flex-col gap-[10px] mt-[20px] mb-[40px] pl-4">
                {comment.sub_comments.map((reply) => (
                  <div key={reply.id} className="mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={reply.author_avatar}
                        alt="avatar"
                        className="w-[38px] h-[38px] rounded-[40px] object-cover"
                      />
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-col gap-[8px] font-firaGo">
                          <span className="font-bold text-[18px] text-gray-headline leading-[100%]">
                            {reply.author_nickname}
                          </span>
                          <p className="text-[16px] text-gray-subheadline font-[350px] leading-[100%]">
                            {reply.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
