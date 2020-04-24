import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Logon from '../pages/Logon/Logon';
import RegisterUser from '../pages/RegisterUser/RegisterUser';
import Sales from '../pages/Sales/Sales';
import SaleManagement from '../pages/SaleManagement/SaleManagement';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/registrar" component={RegisterUser} />
        <Route path="/vendas" component={Sales} />
        <Route path="/gerenciar" component={SaleManagement} />
        <Route
          path="*"
          component={(props) => (
            <Redirect to={{ pathname: '/', search: props.location.search }} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
