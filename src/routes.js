import React from 'react';
import Register from './components/Register/Register';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
)