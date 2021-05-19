import React, { useEffect } from "react";
import "./AsideBoardsList.css";
import { useFetch } from "../../../helpers/useFetch";
import { Link } from "react-router-dom";

export const AsideBoardsList = () => {
  const [methods, res, loading, isError] = useFetch();

  useEffect(() => {
    methods.get("/api/board/");
  }, []);

  return (
    <aside className="board__navigation">
      {loading && loading}
      {res &&
        res.map((elem) => {
          return (
            <Link
              to={{ pathname: `/board/${elem.id}`, fromDashboard: false }}
              key={elem.id}
              className="board__threadLink"
            >
              {elem.name}
            </Link>
          );
        })}
    </aside>
  );
};
