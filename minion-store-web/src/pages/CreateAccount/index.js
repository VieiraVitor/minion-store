import React from 'react';
import Input from '../../components/Input';
import { useAppContext } from '../../libs/contextLib';
import { useFormFields } from '../../libs/hooksLib';
import '../../assets/styles/global.css'
import './style.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { onError } from '../../libs/errorLib';
import LoaderButton from '../../components/LoaderButton';
import { Link } from 'react-router-dom';

function CreateAccount() {
    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [newUser, setNewUser] = useState(null);

    const [fields, handleFieldChange] = useFormFields({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });

    function validateForm() {
        return (
            fields.name.length > 0 &&
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        )
    }

    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        try {
            const newUser = await Auth.signUp({
                username: fields.email,
                password: fields.password,
            });
            setIsLoading(false);
            setNewUser(newUser);
        } catch (e) {
            setIsLoading(false);
            if (e.name === 'UsernameExistsException') {
                setNewUser(true)
                alert('O código de confirmação foi reenviado para seu email, por favor, verifique')
                renderConfirmationForm();
                await Auth.resendSignUp(fields.email);
            }
            else {
                onError(e);
                setIsLoading(false);
            }
        }
    }

    async function handleConfirmationSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        try {
            await Auth.confirmSignUp(fields.email, fields.confirmationCode);
            await Auth.signIn(fields.email, fields.password);

            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function renderConfirmationForm() {
        return (
            <div id="page-create-account-form" className="container">
                <main>
                    <form onSubmit={handleConfirmationSubmit}>
                        <h1>Código de Confirmação</h1>
                        <Input
                            id="confirmationCode"
                            type="text"
                            value={fields.confirmationCode}
                            onChange={handleFieldChange}
                        />
                        <footer>
                            <LoaderButton isLoading={isLoading} disabled={!validateConfirmationForm()} type="submit">
                                Verificar
                            </LoaderButton>
                        </footer>
                        <p>Verifique o seu email para obter o código de confirmação !</p>
                    </form>
                </main>
            </div>
        );
    }

    function renderForm() {
        return (
            <div id="page-create-account-form" className="container">
                <main>
                    <form onSubmit={handleSubmit}>
                        <h1>Cadastre-se</h1>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Nome"
                            value={fields.name}
                            onChange={handleFieldChange}
                        />
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
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirmar Senha"
                            value={fields.confirmPassword}
                            onChange={handleFieldChange}
                        />
                        <footer>
                            <LoaderButton isLoading={isLoading} disabled={!validateForm()} type="submit">
                                Criar Conta
                            </LoaderButton>
                            <p>
                                Já possui uma conta ?
                            <Link to="/login">
                                    Faça seu Login
                            </Link>
                            </p>
                        </footer>
                    </form>
                </main>
            </div>
        )
    }

    return (
        <div id="page-create-account" className="container">
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    )
}

export default CreateAccount;