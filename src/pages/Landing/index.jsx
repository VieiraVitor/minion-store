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
import MinionItem from '../../components/MinionItem';

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
                    <MinionItem 
                        image={Minion1}
                    />
                    <MinionItem 
                        image={Minion2}
                    />
                    <MinionItem 
                        image={Minion3}
                    />
                    <MinionItem 
                        image={Minion4}
                    />
                    <MinionItem 
                        image={Minion5}
                    />
                    <MinionItem 
                        image={Minion6}
                    />
                    <MinionItem 
                        image={Minion7}
                    />
                    <MinionItem 
                        image={Minion8}
                    />
                </article>
            </main>
        </div>
    )
}

export default Landing;