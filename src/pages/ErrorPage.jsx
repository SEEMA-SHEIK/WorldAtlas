import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      This is error page
      <h1>Oops! An error occurred</h1>
      {error && <p> {error.data} </p>}
      <NavLink to="/">
        <button>Go home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
