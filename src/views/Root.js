import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from '../theme/GlobalStyle';
import MainTemplate from '../templates/MainTemplate';

import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

const Root = () => (
  <Router>
    <MainTemplate>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
