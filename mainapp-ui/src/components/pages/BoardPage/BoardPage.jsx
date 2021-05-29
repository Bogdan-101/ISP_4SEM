import React, { useState, useEffect } from "react";
import "./BoardPage.css";
import { useSelector, useDispatch } from "react-redux";
import { NewThreadForm } from "../../commons/NewThreadForm";
import { Header } from "../../commons/Header";
import { AsideBoardsList } from "../../commons/AsideBoardsList";
import { ThreadList } from "./ThreadList";
import { useFetch } from "../../../helpers/useFetch";
import { set_threads } from '../../../reducers/ThreadSlice';

export const BoardPage = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch()
  const [isCreate, setCreate] = useState(false);
  const [methods, res, loading, isError] = useFetch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const name = useSelector(state => state.threads.boardName);
  const threads = useSelector(state => state.threads.threads);

  useEffect(() => {
    methods.get(`/api/board/${id}/`);
  }, [id]);

  useEffect(() => {
    if (res)
      dispatch(set_threads(res))
  }, [res])

  function handleClick() {
    setCreate(!isCreate);
  }

  return (
    <div className="board">
      <Header />
      <div className="board__header">
        <h1 className="header__boardname">{name && name}</h1>
        {isAuth && (
          <div className="board__create">
            <span onClick={handleClick}>
              {isCreate ? "Close form" : "Create thread"}
            </span>
            {isCreate && (
              <NewThreadForm boardName={name} closeHandle={handleClick} />
            )}
          </div>
        )}
      </div>
      <div className="board__wrapper">
        <AsideBoardsList />
        {loading && loading}
        {threads && <ThreadList threads={threads} />}
      </div>
    </div>
  );
};
