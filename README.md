# projeto-entrevista
Cadastro de cliente com validação, com consulta por e-mail, documentado com swagger.

Para o projeto rodar iremos iniciar com a instalação do mysql

Link para instalação no Windows : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-installation.html

Link para instalação no Mac : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/osx-installation.html

Link para instalação no Linux : https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/linux-installation.html


Após a instalação abra seu mysqlworkbench inicia sua conexão e rode esse script:

-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: cliente
-- Source Schemata: cliente
-- Created: Sun Oct 31 21:27:14 2021
-- Workbench Version: 8.0.24
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema cliente
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `cliente` ;
CREATE SCHEMA IF NOT EXISTS `cliente` ;

-- ----------------------------------------------------------------------------
-- Table cliente.usuarios
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `cliente`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `sobrenome` VARCHAR(45) NULL DEFAULT NULL,
  `idade` INT NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `cep` VARCHAR(45) NULL DEFAULT NULL,
  `rua` VARCHAR(45) NULL DEFAULT NULL,
  `cpf` VARCHAR(45) NULL DEFAULT NULL,
  `createdAt` VARCHAR(45) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  `updatedAt` VARCHAR(45) NULL DEFAULT NULL,
  `deletedAt` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
SET FOREIGN_KEY_CHECKS = 1;

Logo em seguida clone o repositorio da branch master e abra o config e edite os campos login e pass para seus usarios do banco de dados

Vá ate o console e uso o comando npm-install

Em seguida va no console e npm start


Para acessar o swagger o endereço é : http://localhost:8080/api-docs ou http://localhost:5000/api-docs/#/default/get_cliente


