import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from '../pages/Logon/Logon';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
