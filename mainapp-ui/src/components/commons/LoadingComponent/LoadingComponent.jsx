import { Puff } from "@agney/react-loading";
import React from "react";
import "./LoadingComponent.css";

export const LoadingComponent = () => (
  <div className="loading">
    <Puff width={100} />
  </div>
);
