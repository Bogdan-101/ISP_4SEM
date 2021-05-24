import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Login.css";
import { LoginForm } from "./LoginForm";
import { LoadingComponent } from "../../commons/LoadingComponent";
import { Logo } from "../../commons/Logo";
import { Header } from "../../commons/Header";
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const error = useSelector((state) => state.login.error);
  const isLoading = useSelector((state) => state.login.isLoading);
  const isAuth = useSelector(state => state.login.isAuth)
  const history = useHistory();

  
  useEffect(() => {
    console.log('isAuth changed, isAuth:', isAuth)
    if (history && isAuth) {
      console.log('redirecting')
      history.push('/');
    }
  }, [isAuth, history])


  return (
    <>
      <Header />
      <div className="login">
        <Logo />
        <div className="login__wrapper">
          {isLoading ? <LoadingComponent /> : <LoginForm />}
          {error && (
            <div className="error">
              <div className="error__text">{error}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
