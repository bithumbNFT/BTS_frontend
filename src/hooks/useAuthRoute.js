import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem('userInfo') ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ))}
    />
  );
};

export default AuthRoute;
