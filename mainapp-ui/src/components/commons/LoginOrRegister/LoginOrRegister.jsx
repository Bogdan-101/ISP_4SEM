import React from "react";
import "./LoginOrRegister.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { logout } from '../../../reducers/UserSlice'

const NotAuth = () => (
  <>
    <Link to={{ pathname: "/login", fromDashboard: false }} className="wrapper__link">
      <span className="wrapper_option">Login</span>
    </Link>
    <Link to={{ pathname: "/register", fromDashboard: false }} className="wrapper__link">
      <span className="wrapper_option">Register</span>
    </Link>
  </>
)

const DidAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.login.user)

  return (
    <button className="wrapper_Authed" onClick={() => {dispatch(logout());}}>Hello, {user.username}</button>
  )
}

export const LoginOrRegister = () => {
  const isAuth = useSelector(state => state.login.isAuth)

  return (
    <div className="wrapper">
      {!isAuth ? <NotAuth /> : <DidAuth />}
    </div>
  );
};
