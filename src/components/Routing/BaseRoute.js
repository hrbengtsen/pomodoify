import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function BaseRoute({ children, user, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default BaseRoute;