import React from "react";

const Comment = ({ comment, deleteCallBack }) => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Avatar"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{comment.name}</strong>
            <br />
            {comment.comment}
          </p>
        </div>
        <div
          className="delete-comment"
          onClick={() => deleteCallBack(comment?.id)}
        >
          X
        </div>
      </div>
    </article>
  );
};

export default Comment;
