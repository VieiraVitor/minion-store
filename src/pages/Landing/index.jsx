import React from 'react';
import MinionItem from '../../components/MinionItem';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';

import '../../assets/styles/global.css'
import './style.css';

import Minion1 from '../../assets/images/minion-1.png';
import Minion2 from '../../assets/images/minion-2.png';
import Minion3 from '../../assets/images/minion-3.png';
import Minion4 from '../../assets/images/minion-4.png';
import Minion5 from '../../assets/images/minion-5.png';
import Minion6 from '../../assets/images/minion-6.png';
import Minion7 from '../../assets/images/minion-7.png';
import Minion8 from '../../assets/images/minion-8.png';

function Landing() {
    return (
        <div id="page-landing" className="container">
            <Navbar />
            <main>
                <header className="page-landing-header">
                    <div className="imagem-left"></div>
                    <div className="body-text">Você quer um minion ?</div>
                    <div className="imagem-right"></div>
                </header>
                <article className="minion">
                    <MinionItem
                        image={Minion1}
                        title="Minion Bob"
                        subtitle="Possui um bichinho de pelúcia"
                    />
                    <MinionItem
                        image={Minion2}
                        title="Minion Kevin"
                        subtitle="É um lider"
                    />
                    <MinionItem
                        image={Minion3}
                        title="Minion Jerry"
                        subtitle="Melhor amigo do Stuart"
                    />
                    <MinionItem
                        image={Minion4}
                        title="Minion Stuart"
                        subtitle="É o mais faminto"
                    />
                    <MinionItem
                        image={Minion5}
                        title="Minion Mark"
                        subtitle="Cantor e intelectual"
                    />
                    <MinionItem
                        image={Minion6}
                        title="Minion Dave"
                        subtitle="Ama foguetes e mísseis"
                    />
                    <MinionItem
                        image={Minion7}
                        title="Minion Phil"
                        subtitle="Ri de qualquer coisa"
                    />
                    <MinionItem
                        image={Minion8}
                        title="Minion Vampiro"
                        subtitle="É um vampiro"
                    />
                </article>
                <section>
                    <form>
                        <fieldset>
                            <h2>Deseja reservar seus minions imediatamente ?</h2>
                            <p>
                                Basta preencher esse breve formulário, com seus dados,
                                e em poucos minutos você estará recebendo um e-mail
                                com todas as informações para a reserva dos minions.
                    </p>
                        </fieldset>
                        <fieldset>
                            <legend>Seus Dados</legend>
                            <Input
                                name="name"
                                label="Nome completo"
                            />
                            <Input
                                name="number"
                                label="Número"
                            />
                            <Input
                                name="email"
                                label="Email"
                            />
                            <Input
                                name="minion"
                                label="Escolha seu Minion"
                                options={[
                                    { value: 'Bob', label: 'bob' },
                                    { value: 'Kevin', label: 'kevin' },
                                    { value: 'Jerry', label: 'jerry' },
                                    { value: 'Stuart', label: 'stuart' },
                                    { value: 'Mark', label: 'mark' },
                                    { value: 'Dave', label: 'dave' },
                                    { value: 'Phil', label: 'phil' },
                                    { value: 'Vampiro', label: 'vampiro' },
                                ]}
                            />
                        </fieldset>
                    </form>
                </section>
            </main>
        </div >
    )
}

export default Landing;