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
<li>Página de histórico de reservas recebe as informações das reservas armazenadas no AWS DynamoDB para preencher a tabela com o histórico</li>
<li>Botão "Sair" desautentica usuário e redireciona para página de login</li>
<li>Usuário não autorizado só consegue acessar página de login e cadastro</li>

# Rodar o front-end no ambiente local
## Linux (Ubuntu/Debian)

Para instalar o Yarn no Linux configurando o repositório do **Yarn**:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Instale utilizando o seguinte comando:

```bash
 sudo apt update && sudo apt install --no-install-recommends yarn
```

Adicione ao arquivo `~/.bashrc` a seguinte linha: 

```bash
export PATH="$PATH:`yarn global bin`"
```

Feche e abra o terminal novamente, ou execute `source ~/.bashrc` e em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

Acesse o diretório da aplicação `minion-store-web/` e rode o comando abaixo para baixar as dependencias:

```bash
yarn install
```

Para executar o servidor:

```bash
yarn start
```


