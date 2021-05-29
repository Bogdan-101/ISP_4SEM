import React, { useState } from "react";
import "./NewCommentForm.css";
import { useSelector, useDispatch } from "react-redux";
import { add_comment } from '../../../reducers/ThreadSlice';
import axios from "axios";

export const NewCommentForm = ({ id, closeHandle }) => {
  const [content, setContent] = useState("");
  const token = useSelector((state) => state.login.token);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  function handleTextAreaChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const endpoint = "http://127.0.0.1:8000/api/comment/";
    const data = new FormData();
    data.append("id", id);
    data.append("content", content);
    if (image) data.append("image", image, image.name);
    axios
      .post(endpoint, data, {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `token ${token}`,
        },
      })
      .then((data) => {
        dispatch(add_comment({threadId: id, content: content, image: image ? image.name : null}))
        setContent("");
        closeHandle && closeHandle();
      })
      .catch((e) => {
        alert(e);
      });
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        value={content}
        onChange={handleTextAreaChange}
        placeholder="Your comment here..."
        className="form__textarea"
      />
      <label>
        Select image...
        <input
          className="form__file"
          type="file"
          name="image"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={handleImageChange}
        />
      </label>
      <input type="submit" value="Submit" className="form__submit" />
    </form>
  );
};
