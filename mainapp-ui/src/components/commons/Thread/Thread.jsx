import React, { useState } from "react";
import "./Thread.css";
import { useSelector } from "react-redux";
import { NewCommentForm } from "../NewCommentForm";
import { NoComments } from "./NoComments";
import { CommentsBlock } from "./CommentsBlock/CommentsBlock";
import { DraggableBlock } from "../DraggableBlock";
import axios from "axios";
import { SERVER_URL } from "../../../helpers/constants";
import { PostInfoPopper } from "../PostInfoPopper";
import { ImageElement } from '../ImageElement';

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
  ownerId,
  image
}) => {
  const [isComment, setIsComment] = useState(false);
  const isAuth = useSelector((state) => state.login.isAuth);
  const isStaff = useSelector((state) => state.login.user.isStaff);
  const token = useSelector((state) => state.login.token);

  function handleClick() {
    setIsComment(!isComment);
  }

  function bless() {
    axios.put(
      SERVER_URL + `/api/thread/${id}/`,
      { is_blessed: is_blessed ? "False" : "True" },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
  }
  
  return (
    <div className="thread">
      <div className="thread__main">
        <div className="thread__detail">
          <span>
            Anon {date} №{number}
          </span>
          {is_staff && (
            <button onClick={bless} className="thread__bless">
              {is_blessed ? "Отнять благословление" : "Благословить"}
            </button>
          )}
          {isStaff && <PostInfoPopper userId={ownerId} />}
        </div>
        <div className="thread__imageAndTitle">
          {image && <ImageElement path={image} />}
          <h3 className="thread__title">{title}</h3>
        </div>
        <p className="thread__text">{content}</p>
        {is_blessed && (
          <p className="thread__blessed">Anomie благословил этот пост.</p>
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
