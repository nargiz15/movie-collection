import React, { useState } from "react";
import { Send, ThumbsUp } from "lucide-react";
import "../assets/styles/comments.css";

const CommentSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: "İstifadəçi",
        text: newComment,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const handleLike = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Şərhlər</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <div className="comment-header">
              <div>
                <span className="comment-user">{comment.user}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <button
                className="like-button"
                onClick={() => handleLike(comment.id)}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{comment.likes}</span>
              </button>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>

      <div className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Şərhinizi yazın..."
          className="comment-input"
        />
        <button onClick={handleAddComment} className="submit-button">
          <Send className="w-4 h-4" />
          Göndər
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
