import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from "../../libs/contextLib";
import './style.css';

function Navbar() {
    const { userHasAuthenticated } = useAppContext();

    function handleLogout() {
        userHasAuthenticated(false);
    }

    return (
        <div className="page-navbar">
            <div className="top-bar-container">
                <Link to="/landing">
                    Página Inicial
                    </Link>
                <Link to="/">
                    Minhas Reservas
                    </Link>
                <Link onClick={handleLogout}>
                    Sair
                </Link>
            </div>
        </div>
    );
}

export default Navbar;