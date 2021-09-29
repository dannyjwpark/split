import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// making sure users can't visit "/login" once already logged in

// if application state has a currentUser, redirect to "/"
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      // <Component {...props} />
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);


const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

// making sure users can't visit "/signup" once already logged in
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

  // withRouter: gives access to history object's properties
      // updated match, location, and history props to the wrapped component
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
