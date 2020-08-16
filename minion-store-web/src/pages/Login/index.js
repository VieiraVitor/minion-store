import React, { useState } from 'react';
import Input from '../../components/Input';
import { Auth } from 'aws-amplify';
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useHistory } from 'react-router-dom';
import LoaderButton from '../../components/LoaderButton';
import { useFormFields } from '../../libs/hooksLib';
import { Link } from 'react-router-dom';

import '../../assets/styles/global.css';
import './style.css';

function Login() {
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });

    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        try {
            await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            console.log(e)
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div id="page-login" className="container">
            <div id="page-login-form" className="container">
                <main>
                    <form onSubmit={handleLogin}>
                        <h1>Entrar</h1>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={fields.email}
                            onChange={handleFieldChange}
                        />
                        <Input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            value={fields.password}
                            onChange={handleFieldChange}
                        />
                        <footer>
                            <LoaderButton isLoading={isLoading} disabled={!validateForm()} type="submit">
                                Entrar
                            </LoaderButton>
                            <p>
                                Ainda não possui uma conta ?
                            <Link to="/new-account">
                                    Cadastre-se
                            </Link>
                            </p>
                        </footer>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login;