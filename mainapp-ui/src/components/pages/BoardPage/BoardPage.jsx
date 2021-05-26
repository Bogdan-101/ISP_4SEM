import React, { useState, useEffect } from "react";
import "./BoardPage.css";
import { useSelector } from "react-redux";
import { NewThreadForm } from "../../commons/NewThreadForm";
import { Header } from "../../commons/Header";
import { AsideBoardsList } from "../../commons/AsideBoardsList";
import { ThreadList } from "./ThreadList";
import { useFetch } from "../../../helpers/useFetch";

export const BoardPage = ({ match }) => {
  const id = match.params.id;
  const [isCreate, setCreate] = useState(false);
  const [methods, res, loading, isError] = useFetch();
  const isAuth = useSelector((state) => state.login.isAuth);

  useEffect(() => {
    methods.get(`/api/board/${id}/`);
  }, [id]);

  function handleClick() {
    setCreate(!isCreate);
  }

  return (
    <div className="board">
      <Header />
      <div className="board__header">
        <h1 className="header__boardname">{res && res.name}</h1>
        {isAuth && (
          <div className="board__create">
            <span onClick={handleClick}>
              {isCreate ? "Close form" : "Create thread"}
            </span>
            {isCreate && (
              <NewThreadForm boardName={res.name} closeHandle={handleClick} />
            )}
          </div>
        )}
      </div>
      <div className="board__wrapper">
        <AsideBoardsList />
        {loading && loading}
        {res && <ThreadList threads={res.posts} />}
      </div>
    </div>
  );
};
