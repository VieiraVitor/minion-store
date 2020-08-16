import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Landing from './pages/Landing';
import NotFound from './components/NotFound';
import Reservations from './pages/Reservations';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/new-account" exact component={CreateAccount} />
                <Route path="/landing" exact component={Landing} />
                <Route path="/reservations" exact component={Reservations} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;