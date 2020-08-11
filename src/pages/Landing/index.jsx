import React from 'react';

import '../../assets/styles/global.css'
import './style.css';
import { Link } from 'react-router-dom';

import Minion1 from '../../assets/images/minion-1.png'
import Minion2 from '../../assets/images/minion-2.png'
import Minion3 from '../../assets/images/minion-3.png'
import Minion4 from '../../assets/images/minion-4.png'
import Minion5 from '../../assets/images/minion-5.png'
import Minion6 from '../../assets/images/minion-6.png'
import Minion7 from '../../assets/images/minion-7.png'
import Minion8 from '../../assets/images/minion-8.png'

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
                    <div className="imagem-left"></div>
                    <div className="body-text">Você quer um minion ?</div>
                    <div className="imagem-right"></div>
                </header>
                <article className="minion">
                    <div class="minion-item">
                        <img src={Minion1} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion2} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion3} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion4} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion5} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion6} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion7} alt="Minion1" />
                    </div>
                    <div class="minion-item">
                        <img src={Minion8} alt="Minion1" />
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Landing;