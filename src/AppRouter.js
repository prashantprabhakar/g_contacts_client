import React from 'react';
import { Route, Router } from 'react-router-dom' 

import './App.css';

import history from './common/history'
import Dashboard from "./components/Dashbaord"
import Login from "./components/Login"
import ContactList from "./components/ContactList"
import Navbar from "./components/Navbar"
import NotFound from "./components/common/NotFound"
import GuardedRoute from './common/GuardedRoute'

function AppRouter() {
  
  return (
    <Router history={history} forceRefresh={true}>
            
        <Navbar />
        <div className="container">
            <GuardedRoute exact path='/' component= {Dashboard} history={history} />
            <Route path='/login' component={Login} history={history}/>
            <GuardedRoute path='/list' component={ContactList}  />
            <GuardedRoute component={NotFound} />
      </div>
    </Router>
  );
}

export default AppRouter
