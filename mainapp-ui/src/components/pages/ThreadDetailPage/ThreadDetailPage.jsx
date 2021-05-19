import React, { useEffect } from "react";
import "./ThreadDetailPage.css";
import { Thread } from "../../commons/Thread";
import axios from "axios";
import { Header } from "../../commons/Header";
import { useFetch } from "../../../helpers/useFetch";

export const ThreadDetailPage = ({ match }) => {
  const id = match.params.id;
  const [methods, res, loading, isError] = useFetch();

  useEffect(() => {
    methods.get(`/api/thread/${id}/`);
  }, [id]);

  return (
    <>
      <Header />
      {res && (
        <div className="thread__page">
          <Thread
            content={res.content}
            title={res.title}
            id={id}
            date={new Date(res.pub_date).toLocaleString()}
            number={res.slug}
            comments={res.comments}
          />
        </div>
      )}
    </>
  );
};
