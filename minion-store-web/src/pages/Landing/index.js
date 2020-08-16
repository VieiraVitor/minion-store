import React, { useState } from 'react';
import MinionItem from '../../components/MinionItem';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import { Auth, API } from 'aws-amplify';
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useHistory } from 'react-router-dom';
import LoaderButton from '../../components/LoaderButton';
import { useFormFields } from '../../libs/hooksLib';
import Select from 'react-select';

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
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        number: "",
        email: "",
    });

    const [selectedMinion, setSelectedMinion] = useState([]);

    const minions = [
        { value: 'Bob', label: 'Bob' },
        { value: 'Kevin', label: 'Kevin' },
        { value: 'Jerry', label: 'Jerry' },
        { value: 'Stuart', label: 'Stuart' },
        { value: 'Mark', label: 'Mark' },
        { value: 'Dave', label: 'Dave' },
        { value: 'Phil', label: 'Phil' },
        { value: 'Vampiro', label: 'Vampiro' }
    ]

    const handleMinionChange = e => {
        let position = 0;
        for (let index in e) {
            position = e[index];
        }
        const { value } = position;
        const updateSelectedMinions = [...selectedMinion];
        updateSelectedMinions.push(value);

        setSelectedMinion(updateSelectedMinions);
    };

    function validateForm() {
        return fields.name.length > 0 && fields.email.length > 0 && fields.number.length > 0 && selectedMinion.length > 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        try {
            await API.post("reservations", "/reservations", {
                body: {
                    name: fields.name,
                    number: fields.number,
                    email: fields.email,
                    minions: selectedMinion
                }
            })
            alert("Reserva realizada!")
            setIsLoading(false);
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <h2>Deseja reservar seus minions imediatamente ?</h2>
                            <p>
                                Basta preencher esse breve formulário, com seus dados,
                                e em poucos minutos você estará recebendo um e-mail
                                com todas as informações para completar sua reserva.
                            </p>
                        </fieldset>
                        <fieldset>
                            <legend>Seus Dados</legend>
                            <Input
                                id="name"
                                name="name"
                                label="Nome completo"
                                value={fields.name}
                                onChange={handleFieldChange}
                            />
                            <Input
                                id="number"
                                name="number"
                                label="Número"
                                value={fields.number}
                                onChange={handleFieldChange}
                            />
                            <Input
                                id="email"
                                name="email"
                                label="Email"
                                value={fields.email}
                                onChange={handleFieldChange}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Selecione um ou mais Minions</legend>
                            <Select
                                defaultValue={[]}
                                isMulti
                                name="minions"
                                options={minions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                menuPlacement="top"
                                onChange={handleMinionChange}
                            />
                            <footer>
                                <LoaderButton isLoading={isLoading} disabled={!validateForm()} type="submit">
                                    Reservar
                                </LoaderButton>
                            </footer>
                        </fieldset>
                    </form>
                </section>
            </main>
        </div >
    )
}

export default Landing;