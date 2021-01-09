# projeto-entrevista
Cadastro de cliente com validação, com consulta por e-mail, documentado com swagger.

Para o projeto rodar iremos iniciar com a instalação do mysql

Link para instalação no Windows : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-installation.html

Link para instalação no Mac : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/osx-installation.html

Link para instalação no Linux : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/linux-installation.html


Após a instalação inicie seu server e crie uma database chamada cliente com os comandos:

CREATE DATABASE cliente;

Logo em seguida clone o repositorio da branch master e abra o arquivo app.js, na linha 15 temos o seguinte codigo de conexão com a database:

var sequelize = new Sequelize('cliente', 'root', '', 

Onde temos o campo 'root' e o nome de usuário que voce configurou na sua database e o campo '' que esta em branco e a senha, coloque o respectivos usuário e senha e vamos ao proximo passso.

Vá ate o console e uso o comando npm-install

Em seguida va no console e npm start


Para acessar o swagger o endereço é : http://localhost:8080/api-docs ou http://localhost:5000/api-docs/#/default/get_cliente


