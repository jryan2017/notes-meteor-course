import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (
        Meteor.userId() ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Login/>
        )
      )}/>
      <Route path="/signup" render={() => (
        Meteor.userId() ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Signup/>
        )
      )}/>
      <Route path="/dashboard" render={() => (
        Meteor.userId() ? (
          <Dashboard/>
        ) : (
          <Redirect to="/"/>
        )
      )}/>
      <Route path="/dashboard/:id" render={() => (
        Meteor.userId() ? (
          <Dashboard/>
        ) : (
          <Redirect to="/"/>
        )
      )}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);