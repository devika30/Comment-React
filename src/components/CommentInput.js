import React, { useState } from "react";
import "./styles.css"

function CommentInput({ onSubmitOfComment }) {
  const [commentBody, setCommentBody] = useState("");

  const handleCommentSubmit = () => {
    if (commentBody.trim() !== "") {
      const newComment = {
        id: Date.now(),
        body: commentBody,
        parentcommentArray: [],
      };
      onSubmitOfComment(newComment);
      setCommentBody("");
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="What are your thoughts"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>comment</button>
      </div>
    </div>
  );
}

export default CommentInput;
