import React, { useState } from "react";
import CommentInput from "./CommentInput";
import "./styles.css"

function CommentItem({ commentsData }) {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState([]);
  const onComment = (newComment) => {
    setComments((prevState) => [newComment, ...prevState]);
  };
  console.log(commentsData);
  return (
    <div className="comment-item">
      <span className="comment-body">{commentsData.body}</span>
      {isReplying ? (
        <button onClick={() => setIsReplying(false)}>cancel</button>
      ) : (
        <button onClick={() => setIsReplying(true)}>Reply</button>
      )}
      {isReplying ? <CommentInput onSubmitOfComment={onComment} /> : ""}
      {comments.map((comment) => (
        <CommentItem commentsData={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentItem;


//inside commentItem function we are calling commentItem again hence its a recursive problem
