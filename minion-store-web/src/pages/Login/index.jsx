import React, { useState } from 'react';
import Input from '../../components/Input';
import { Auth } from 'aws-amplify';
import { useAppContext } from "../../libs/contextLib";

import '../../assets/styles/global.css'
import './style.css';

function Login() {
    const { userHasAuthenticated } = useAppContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        console.log("email: " + email);
        console.log(password);
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
        } catch (e) {
            console.log(e)
            alert(e.message);
        }
    }

    return (
        <div id="page-login" className="container">
            <div id="page-login-form" className="container">
                <main>
                    <form onSubmit={handleLogin}>
                        <h1>Sign In</h1>
                        <Input
                            type="email"
                            placeholder="Login"
                            value={email}
                            onChange={(e) => { console.log(e); setEmail(e.target.value) }}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <footer>
                            <button type="submit">
                                Sign In
                            </button>
                            <p>
                                Don't have a account ?
                            <a href="/new-account">
                                    Sign Up
                            </a>
                            </p>
                        </footer>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login;