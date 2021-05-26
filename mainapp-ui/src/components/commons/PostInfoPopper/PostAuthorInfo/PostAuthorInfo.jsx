import React, { useEffect } from "react";
import "./PostAuthorInfo.css";
import { useFetch } from "../../../../helpers/useFetch";
import { Link } from "react-router-dom";

export const PostAuthorInfo = ({ userId }) => {
  const [methods, res, loading, isError] = useFetch();

  useEffect(() => {
    methods.get(`/users/user/${userId}/`);
  }, []);

  return (
    <div className="author">
      {!res ? (
        loading
      ) : (
        <div className="author__info">
          <p className="author__infoRow">
            <span className="author__start">username:</span> {res.username}
          </p>
          <p className="author__infoRow">
            <span className="author__start">email:</span> {res.email}
          </p>
          <p className="author__infoRow">
            <span className="author__start">is_staff:</span> {res.is_staff + ""}
          </p>
          <Link
            to={{ pathname: `/user/${userId}`, fromDashboard: false }}
            className="author__button"
          >
            Link to author profile
          </Link>
        </div>
      )}
    </div>
  );
};
