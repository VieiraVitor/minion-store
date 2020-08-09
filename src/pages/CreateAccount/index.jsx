import React from 'react';
import Input from '../../components/Input';

import '../../assets/styles/global.css'
import './style.css'

function CreateAccount() {
    return (
        <div id="page-create-account-form" className="container">
            <main>
                <form>
                    <h1>Create Account</h1>
                    <Input
                        type="text"
                        placeholder="Name"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <footer>
                        <button type="submit">
                            Create Account
                        </button>
                        <p>
                           Already have an account ?
                            <a href="/">
                                Sign In
                            </a>
                        </p>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default CreateAccount;