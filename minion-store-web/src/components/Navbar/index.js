import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from "../../libs/contextLib";
import { Auth } from 'aws-amplify';
import './style.css';

function Navbar() {
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();

    async function handleLogout() {
        await Auth.signOut();

        userHasAuthenticated(false);
        history.push("/");
    }

    return (
        <div className="page-navbar">
            <div className="top-bar-container">
                <Link to="/">
                    Página Inicial
                    </Link>
                <Link to="/reservations">
                    Minhas Reservas
                    </Link>
                <button onClick={handleLogout}>
                    Sair
                </button>
            </div>
        </div>
    );
}

export default Navbar;