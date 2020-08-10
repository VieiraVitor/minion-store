import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />  
            <Route path="/new-account" exact component={CreateAccount} />  
            <Route path="/landing" exact component={Landing} />  
        </BrowserRouter>
    );
}

export default Routes;