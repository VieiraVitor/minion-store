import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />  
            <Route path="/new-account" exact component={CreateAccount} />  
        </BrowserRouter>
    );
}

export default Routes;