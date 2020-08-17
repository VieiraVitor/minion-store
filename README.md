#  Minion Store
# Sobre o Projeto
A ideia do projeto é:
<p>Desenvolver uma aplicação web onde é possível realizar a reserva de bonecos minions em miniatura, através do preenchimento de um formulário. Com o preenchimento desse formulário, um email é enviado para o usuário com as informações da sua reserva.<p>

# Motivo
O motivo do projeto é participar do desafio da BGC e aprimorar meus conhecimentos em desenvolvimento front-end e back-end.
<p>As tecnologias utilizadas para desenvolvimento dessa aplicação foram:</p>
<li>React (JS, CSS, HTML)</li>
<li>Serverless Framework</li>
<li>AWS Lambda, AWS API Gateway, AWS DynamoDB, AWS S3, AWS Cognito</li>

# Descrição

[Link para a aplicação hospedada no AWS S3](http://minion-store.s3-website-us-east-1.amazonaws.com/)

<li>Para acessar a aplicação, é necessário criar uma conta e efetuar o processo de login.</li>
<li>Na tela de cadastro, é solicitado nome, email, e senha. Ao efetuar o cadastro, um email será enviado para você, contendo o código de confirmação da conta.</li>
<li>Após logar com suas credenciais, você será redirecionado para a página principal da aplicação, que é similar a uma vitrine, onde é possível visualizar os produtos(minions), contendo seus nomes e preço.</li>
<li>Abaixo dos minions, há um formulário para solicitação de reserva, inserindo nome, número de telefone, email e os minions desejados.</li>
<li>Preenchendo o formulário, um email é enviado para o endereço informado no campo email do formulário, contendo as informações pertinentes a reserva dos minions, e você será redirecionado para a página de histórico de reservas para verificar sua reserva.</li>

# Funcionalidades
<li>Página da aplicação hospedada no AWS S3</li>
<li>Criada API para cadastro de reservas no banco, listagem de reservas cadastras e envio de emails</li>
<li>Integração front-end e back-end realizada com AWS Lambda e AWS API Gateway</li>
<li>Cadastro de usuários com token de autenticação fornecido pelo AWS Cognito</li>
<li>Login de usuários autenticado com o AWS Cognito</li>
<li>Informações preenchidas no formulário de reserva de minions, salvas no banco de dados AWS DynamoDB</li>
<li>Página de histórico de reservas recebe as informações das reservas armazenadas no AWS DynamoDB para preencher a tabela com o histórico<li>
<li>Botão "Sair" desautentica usuário e redireciona para página de login</li>
<li>Usuário não autorizado só consegue acessar página de login e cadastro</li>



