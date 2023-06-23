/* A linha abaixo é usanda apenas para o ambiente de desenvolvimento */
DROP DATABASE IF EXISTS avaliacao_final;

CREATE DATABASE avaliacao_final;
USE avaliacao_final;

CREATE TABLE cepUser (
    cep INT UNIQUE NOT NULL,
    localidade VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_nasc DATE NOT NULL,
    user_cep INT NOT NULL,
    FOREIGN KEY (user_cep) REFERENCES cepUser(cep)
);