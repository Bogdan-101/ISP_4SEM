import React, { useEffect } from "react";
import "./ThreadDetailPage.css";
import { Thread } from "../../commons/Thread";
import { Header } from "../../commons/Header";
import { useFetch } from "../../../helpers/useFetch";
import { useSelector } from "react-redux";
import { NotLoginSign } from "../../commons/NotLoginSign";

export const ThreadDetailPage = ({ match }) => {
  const id = match.params.id;
  const [methods, res, loading, isError] = useFetch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    console.log('token: ', token)
    if (!token.includes('token') && token)
      methods.get(`/api/thread/${id}/`);
  }, [id, token]);

  return (
    <>
      <Header />
      <div className="thread__page">
        {isAuth ? (
          res && (
            <Thread
              content={res.content}
              title={res.title}
              id={id}
              date={new Date(res.pub_date).toLocaleString()}
              number={res.slug}
              comments={res.comments}
              ownerId={res.owner}
            />
          )
        ) : (
          <NotLoginSign />
        )}
      </div>
    </>
  );
};
