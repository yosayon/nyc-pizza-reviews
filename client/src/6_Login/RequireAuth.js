import React from "react";
import { Route, Redirect } from "react-router-dom";

const RequireAuth = ({component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.loginStatus === 'connected' ? (
        <Component {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: rest.location }
          }}
        />
      )
    }
  />
);

export default RequireAuth
