import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../layout/Main';
import { About } from '../layout/About';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Main}
    />
    <Route
      path="/about"
      component={About}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
