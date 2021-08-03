import React, { useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import Comments from "./Comments";

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [deleteCommentId, setDeleteCommentId] = useState();

  return (
    <section className="section">
      <div className="comments" id="comments"></div>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <CommentBox
              callBack={(data) => setComments(data)}
              deleteComment={deleteCommentId}
            />
            <Comments
              data={comments}
              deleteCallBack={(d) => setDeleteCommentId(d)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentApp;
