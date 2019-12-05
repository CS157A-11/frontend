import React from "react";
import { Redirect } from "react-router-dom";

const Auth: React.FC = (props: any) => {
  return localStorage.getItem("token") !== null ? (
    props.children
  ) : (
    <Redirect to={"/login"} />
  );
};

export default Auth;
