import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../layout/About';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      component={Main}
    />
    <Route
      path="/about"
      component={About}
    />
  </Switch>
);

export default Routes;
