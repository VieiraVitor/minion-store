import React from 'react';

import '../../assets/styles/global.css'
import './style.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing" className="container">
            <header className="page-header">
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
            </header>

            <main>
                <header className="page-landing-header">
                    Uma imagem foda 
                </header>
                <article className="minion-item">
                    <header>
                        <img src="" alt="Minion1" />
                        <div>
                            <strong>Minion 1</strong>
                        </div>
                    </header>

                    <p>
                        Esse minion é brabo
                    </p>

                    <footer>
                        <p>
                            Preço
                            <strong>R$ 40,00</strong>
                        </p>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default Landing;