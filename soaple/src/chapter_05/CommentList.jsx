import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "배정식",
    comment: "안녕하세요, 정식입니다.",
  },
  {
    name: "김재영",
    comment: "행복아 산책가자",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요~!",
  },
]

export default function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}