import React from "react";
import "./ThreadList.css";
import { Thread } from "../../../commons/Thread";
import { useSelector } from "react-redux";

export const ThreadList = ({ threads }) => {
  const isStaff = useSelector((state) => state.login.user.isStaff);

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
            is_blessed={elem.is_blessed}
            is_staff={isStaff}
            ownerId={elem.owner}
            image={elem.image}
          />
        );
      })}
    </div>
  );
};
