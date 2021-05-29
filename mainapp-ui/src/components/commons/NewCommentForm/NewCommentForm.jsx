import React, { useState } from "react";
import "./NewCommentForm.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

export const NewCommentForm = ({ id, closeHandle }) => {
  const [content, setContent] = useState("");
  const token = useSelector((state) => state.login.token);
  const history = useHistory();
  const [image, setImage] = useState();

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
        setContent("");
        closeHandle && closeHandle();
        history.go(0);
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
