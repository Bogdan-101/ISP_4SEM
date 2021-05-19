import React, { useEffect } from "react";
import "./ThreadList.css";
import { Thread } from "../../../commons/Thread";

export const ThreadList = ({ threads }) => {

  return (
    <div className="board__boardsList">
      {threads.map((elem) => {
        const date = new Date(elem.pub_date);
        return (
          <Thread
            key={elem.id}
            id={elem.id}
            content={elem.content}
            title={elem.title}
            date={date.toLocaleString()}
            number={elem.slug.slice(elem.slug.indexOf("-") + 1)}
            comments={elem.comments.slice(0, 3)}
            allComments={elem.comments}
          />
        );
      })}
    </div>
  );
};
