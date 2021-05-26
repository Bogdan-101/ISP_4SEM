import React, { useState } from "react";
import "./Thread.css";
import { useSelector } from "react-redux";
import { NewCommentForm } from "../NewCommentForm";
import { NoComments } from "./NoComments";
import { CommentsBlock } from "./CommentsBlock/CommentsBlock";
import { DraggableBlock } from "../DraggableBlock";

export const Thread = ({
  title,
  id,
  content,
  number,
  date,
  comments,
  allComments,
  is_blessed,
  is_staff,
}) => {
  const [isComment, setIsComment] = useState(false);
  const isAuth = useSelector((state) => state.login.isAuth);

  function handleClick() {
    setIsComment(!isComment);
  }

  return (
    <div className="thread">
      <div className="thread__main">
        <div className="thread__detail">
          Anon {date} №{number}
        </div>
        <h3 className="thread__title">{title}</h3>
        <p className="thread__text">{content}</p>
        {is_blessed && (
          <p className="thread_blessed">Anomie благословил этот пост.</p>
        )}
        {isAuth && (
          <>
            <button
              onClick={handleClick}
              className="thread__allComments thread__allButton"
            >
              comment
            </button>
            {isComment && (
              <DraggableBlock
                closeHandle={handleClick}
                text="reply to thread"
                render={() => (
                  <NewCommentForm id={id} closeHandle={handleClick} />
                )}
              />
            )}
          </>
        )}
      </div>
      <div className="thread__comments">
        {comments.length === 0 && !isComment ? (
          <NoComments />
        ) : (
          <CommentsBlock
            comments={comments}
            allComments={allComments}
            id={id}
          />
        )}
      </div>
    </div>
  );
};
