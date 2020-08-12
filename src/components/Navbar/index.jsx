import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <navbar className="page-navbar">
            <div className="top-bar-container">
                <Link to="/landing">
                    Página Inicial
                    </Link>
                <Link to="/">
                    Minhas Reservas
                    </Link>
                <Link to="/">
                    Sair
                    </Link>
            </div>
        </navbar>
    );
}

export default Navbar;