import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('loggedUser') && restricted ? (
          <Redirect to="/vendas" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  restricted: PropTypes.bool.isRequired
};

export default PublicRoute;
