import React from "react";
import { useSelector } from "react-redux";
import "./Registration.css";
import { RegistrationForm } from "./RegistrationForm";
import { LoadingComponent } from "../../commons/LoadingComponent";
import { Logo } from "../../commons/Logo";
import { Header } from "../../commons/Header";

export const Registration = () => {
  const error = useSelector((state) => state.login.error);
  const isLoading = useSelector((state) => state.login.isLoading);

  return (
    <>
      <Header />
      <div className="register">
        <Logo />
        <div className="register__wrapper">
          {isLoading ? <LoadingComponent /> : <RegistrationForm />}
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
