/* The PrivateRoute component
This route will only render its component when a user has authenticated, so we need a way to determine whether a user has signed in. RRF has two functions we can use for this: isLoaded and isEmpty.

isLoaded checks whether the auth has been loaded, and we can use isEmpty to check whether the auth is empty. PrivateRoute will render a route component, which will in turn render its children if the user has signed in, and a redirect component from react-router if not.

Here’s what PrivateRoute should look like:

 */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;

/* Notice that we used react-redux’s useSelector Hook to get the auth object. A selector is merely a function that takes in Redux state as an argument and returns data derived from that state.
 */

