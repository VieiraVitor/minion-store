import handler from "./libs/handler-lib";
import AWS from "aws-sdk";

const SES = new AWS.SES();

export const main = handler(async (event, context) => {
    const { to, name, content } = JSON.parse(event.body);

    const params = {
        Source: 'vitoryx@gmail.com',
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: { Data: `Parabéns, ${name} !\nVocê acaba de reservar esses maravilhosos minions: ${content}` },
            },
            Subject: { Data: `Reserva concluída por ${name}` },
        },
    };

    try {
        return await SES.sendEmail(params).promise();
    } catch (error) {
        return error;
    }

});