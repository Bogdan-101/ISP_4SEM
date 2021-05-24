import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../../reducers/UserSlice";
import "./RegistrationForm.css";
import { ValidateWindow } from "../../../commons/ValidateWindow";

export const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        register({ email: email, password: password, username: username })
      );
    },
    [dispatch, email, password, username]
  );

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
      setIsEmailValid(validateEmail(value));
    } else if (name === "password") {
      setPassword(value);
      setIsPasswordValid(value.length > 7);
    } else if (name === "username") {
      setUsername(value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="validateWindow">
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Phone number or email:"
        />
        {email.length !== 0 && <ValidateWindow isValid={isEmailValid} />}
      </div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username:"
      />
      <div className="validateWindow">
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password:"
        />
        {password.length !== 0 && <ValidateWindow isValid={isPasswordValid} />}
      </div>
      <input type="submit" value="Submit" className="login__submit" />
    </form>
  );
};
