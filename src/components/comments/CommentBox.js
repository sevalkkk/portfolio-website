import React, { useState, useEffect } from "react";

const CommentBox = ({ callBack, deleteComment }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const whichComment = comments.filter((item) => item.id !== deleteComment);
    setComments(whichComment);
  }, [deleteComment]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "" || comment === "") {
      alert("Name yada Comment Boş olamaz");
      return false;
    }

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name,
        comment,
      },
    ]);
  };

  useEffect(() => {
    if (callBack) {
      callBack(comments);
      setName("");
      setComment("");
    }
  }, [comments]);

  return (
    <div>
      <h1 className="title">Kindly leave your thoughts below</h1>
      <form onSubmit={submitHandler}>
        <div className="field">
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              name="comment"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e?.target?.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
