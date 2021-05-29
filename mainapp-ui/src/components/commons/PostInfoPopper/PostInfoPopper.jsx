import React, {  useState } from "react";
import { usePopper } from "react-popper";
import { PostAuthorInfo } from './PostAuthorInfo';
import "./PostInfoPopper.css";

export const PostInfoPopper = ({ userId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 20],
        },
      },
    ],
    placement: "top-end",
  });

  function handleDropDownClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <button
        type="button"
        ref={setReferenceElement}
        onClick={handleDropDownClick}
        className="popper__button"
      >
        Post info
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        <div
          className={`popper_content ${
            !isVisible && "popper__content--invisible"
          }`}
        >
          <div className="popper__header">
            Was published by:
          </div>
          <PostAuthorInfo userId={userId}/>
        </div>
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};
