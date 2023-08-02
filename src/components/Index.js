import React, { useState } from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import "./styles.css"

export const Index = () => {
  const dummyComments = [
    {
      id: 1,
      body: "This is comment 1",
      parentcommentArray:[]
    },
    {
      id: 2,
      body: "This is comment 2",
      parentcommentArray:[]
    },
    {
      id: 3,
      body: "This is comment 3",
      parentcommentArray:[]
    },
  ];

  const onSubmitOfComment=(newComment)=>{
        setComments((prevState)=>[newComment,...prevState])
  }

  const [comments, setComments] = useState(dummyComments);

  console.log("Comments array",comments)
  return (
    <div className="app-container">
      React Nested Comments
      <div className="comment-list">
        <CommentInput onSubmitOfComment={onSubmitOfComment}/>
      </div>
       {comments.map((comment)=>(
        <CommentItem commentsData={comment}/>
       ))}
      
    </div>
  );
};

export default Index;
