import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
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
          <PrivateRoute path="/vendas" component={Sales} />
          <PrivateRoute path="/gerenciar" component={SaleManagement} />
          <PublicRoute
            path="*"
            component={(props) => (
              <Redirect to={{ pathname: '/', search: props.location.search }} />
            )}
          />
        </AnimatedSwitch>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
