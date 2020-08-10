import React from 'react';
import Input from '../../components/Input';

import '../../assets/styles/global.css'
import './style.css';

function Login() {
    return (
        <div id="page-login" className="container">
            <div id="page-login-form" className="container">
                <main>
                    <form>
                        <h1>Sign In</h1>
                        <Input
                            type="text"
                            placeholder="Login"
                            label="Login"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            label="Password"
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