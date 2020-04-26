import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Logon from '../pages/Logon/Logon';
import RegisterUser from '../pages/RegisterUser/RegisterUser';
import Sales from '../pages/Sales/Sales';
import SaleManagement from '../pages/SaleManagement/SaleManagement';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <PublicRoute restricted path="/" component={Logon} exact />
          <PublicRoute
            restricted={false}
            path="/registrar"
            component={RegisterUser}
          />
          <PrivateRoute path="/compras" component={Sales} />
          <PrivateRoute path="/gerenciar" component={SaleManagement} />
          <PublicRoute
            path="*"
            restricted={false}
            component={(props) => (
              <Redirect to={{ pathname: '/', search: props.location.search }} />
            )}
          />
        </AnimatedSwitch>
      </Switch>
    </BrowserRouter>
  );
}

Routes.defaultProps = {
  location: () => {}
};

Routes.propTypes = {
  location: PropTypes.func
};

export default Routes;
