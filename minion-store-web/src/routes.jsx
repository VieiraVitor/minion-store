import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Landing from './pages/Landing';
import NotFound from './components/NotFound';
import Reservations from './pages/Reservations';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <UnauthenticatedRoute exact path="/" exact component={Login} />
                <UnauthenticatedRoute exact path="/new-account" exact component={CreateAccount} />
                <AuthenticatedRoute exact path="/landing" exact component={Landing} />
                <AuthenticatedRoute path="/reservations" exact component={Reservations} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;