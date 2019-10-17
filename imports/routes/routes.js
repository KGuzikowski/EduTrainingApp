import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import MainPage from './../ui/MainPage';

const customHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/login', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChangeRedirect = () => {
const pathname = customHistory.location.pathname;
const isAuthenticated = !!Meteor.userId();
const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    customHistory.replace('/');
  } else if(isAuthenticatedPage && !isAuthenticated || pathname === '/') {
    customHistory.replace('/');
  }
};

export const routes = (
  <Router history={customHistory}>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);
