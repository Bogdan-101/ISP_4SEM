import React, { useState } from "react";
import "./ImageElement.css";
import { SERVER_URL } from "../../../helpers/constants";
import { useProgressiveImg } from "../../../helpers/useProgressiveImg";

export const ImageElement = ({ path }) => {
  const [isModal, setIsModal] = useState(false);
  const [src, { blur }] = useProgressiveImg(
    SERVER_URL + path.slice(0, path.length - 4) + "_compressed.jpg",
    SERVER_URL + path
  );

  function handleClick(e) {
    setIsModal(!isModal);
  }

  return (
    <div className="image">
      <img
        className="image__content"
        src={src}
        alt={src}
        onClick={handleClick}
        style={{
          width: 200,
          filter: blur ? "blur(20px)" : "none",
          transition: blur ? "none" : "filter 0.5s ease-out",
        }}
      />
      <div className={`modal ${isModal && "modal--visible"}`} onClick={() => {setIsModal(false)}}>
        <div className="modal__wrapper">
          <img
            className="modal__image"
            src={SERVER_URL + path}
            alt={src}
          />
        </div>
      </div>
    </div>
  );
};
