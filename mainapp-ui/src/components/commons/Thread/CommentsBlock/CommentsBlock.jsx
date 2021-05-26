import React from "react";
import "./CommentsBlock.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../../helpers/constants";
import { useSelector } from "react-redux";
import { PostInfoPopper } from '../../../commons/PostInfoPopper';

export const CommentsBlock = ({ comments, allComments, id }) => {
  const isStaff = useSelector((state) => state.login.user.isStaff);
  const token = useSelector((state) => state.login.token);

  function bless(is_blessed, id) {
    axios.put(
      SERVER_URL + `/api/comment/${id}/`,
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
    <div className="thread__comments">
      {comments.map((elem) => (
        <div className="thread__comment" key={elem.id}>
          <div className="thread__detail">
            <span>
              Anon {new Date(elem.pub_date).toLocaleString()} №
              {elem.slug.slice(elem.slug.indexOf("-") + 1)}
            </span>
            {isStaff && (
              <button
                onClick={() => {
                  bless(elem.is_blessed, elem.id);
                }}
                className="thread__bless"
              >
                {elem.is_blessed ? "Отнять благословление" : "Благословить"}
              </button>
            )}
            {isStaff && <PostInfoPopper userId={elem.owner}/>}
          </div>
          <p className="thread__text">{elem.content}</p>
          {elem.is_blessed && (
            <p className="thread__blessed">Anomie благословил этот пост.</p>
          )}
        </div>
      ))}
      {allComments && allComments.length !== comments.length && (
        <div className="thread__allButton">
          <span className="thread__missedCount">Пропущено {allComments.length - comments.length} комментариев</span>
          <Link
            to={{ pathname: `/thread/${id}`, fromDashboard: false }}
            className="thread__allComments"
          >
            В тред
          </Link>
        </div>
      )}
    </div>
  );
};
