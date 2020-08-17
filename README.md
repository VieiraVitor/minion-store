#  Minion Store
# Sobre o Projeto
A ideia do projeto é:
<p>Desenvolver uma aplicação web onde é póssível realizar a reserva de bonecos minions em miniatura, através do preenchimento de um formulário. Com o preenchimento desse formulário, um email é enviado para o usuário com as informações da sua reserva.<p>

# Motivo
O motivo do projeto é participar do desafio da BGC e aprimorar meus conhecimentos em desenvolvimento front-end e back-end.
<p>As tecnologias utilizadas para desenvolvimento dessa aplicação foram:</p>
<li>React (JS, CSS, HTML)</li>
<li>Serverless Framework</li>
<li>AWS Lambda, AWS API Gateway, AWS DynamoDB, AWS S3, AWS Cognito</li>

# Descrição
Para acessar a aplicação, é necessário criar uma conta e efetuar o processo de login.
Na tela de cadastro, é solicitado nome, email, e senha. Ao efetuar o cadastro, um email será enviado para você, contendo o código de confirmação da conta.
Após logar com suas credenciais, você será redirecionado para a página principal da aplicação, que é similar a uma vitrine, onde é possível visualizar os produtos(minions), contendo seus nomes e preço.
Abaixo dos minions, há um formulário para solicitação de reserva, inserindo nome, número de telefone, email e os minions desejados.
Preenchendo o formulário, um email é enviado para o endereço informado no campo email do formulário, contendo as informações pertinentes a reserva dos minions, e você será redirecionado para a página de histórico de reservas para verificar sua reserva.