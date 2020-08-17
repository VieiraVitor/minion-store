import handler from "./libs/handler-lib";
import AWS from "aws-sdk";

const SES = new AWS.SES();

export const main = handler(async (event, context) => {
    const { to, name, content } = JSON.parse(event.body);

    const params = {
        Destination: {
            ToAddresses: [to],
            BccAddresses: ["thiago@bgcbrasil.com.br"],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Parabéns, ${name} !\nVocê acaba de reservar esses maravilhosos Minions: ${content}\nEntraremos em contato com você para mais informações referente ao pagamento e entrega dos seus Minions`
                },
            },
            Subject: { Data: `Reserva dos Minions concluída por ${name}` },
        },
        Source: 'vitoryx@gmail.com',
    };

    try {
        return await SES.sendEmail(params).promise();
    } catch (error) {
        return error;
    }

});