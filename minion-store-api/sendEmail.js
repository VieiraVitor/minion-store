import handler from "./libs/handler-lib";
import AWS from "aws-sdk";

const SES = new AWS.SES();

export const main = handler(async (event, context) => {
    const { to, from, subject, text } = JSON.parse(event.body);

    const params = {
        Source: from,
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: { Data: text },
            },
            Subject: { Data: subject },
        },
    };

    try {
        return await SES.sendEmail(params).promise();
    } catch (error) {
        return error;
    }

});