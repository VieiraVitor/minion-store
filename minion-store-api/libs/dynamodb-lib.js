import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();

export default {
  // recupera a reserva especifica de um usuário
  get   : (params) => client.get(params).promise(),

  // cria uma reserva
  put   : (params) => client.put(params).promise(),
  
  // recupera todas as reservas feitas por usuário
  query   : (params) => client.query(params).promise(),
};