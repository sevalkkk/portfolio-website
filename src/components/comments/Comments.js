import React from "react";
import Comment from "./Comment";

const Comments = ({ data, deleteCallBack }) => {
  return (
    <section className="section">
      {data?.map((comment, index) => {
        return (
          <Comment
            key={index}
            comment={comment}
            deleteCallBack={(d) => deleteCallBack(d)}
          />
        );
      })}
    </section>
  );
};

export default Comments;
