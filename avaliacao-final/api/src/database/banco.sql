/* A linha abaixo é usanda apenas para o ambiente de desenvolvimento */
DROP DATABASE IF EXISTS avalicao_final;

CREATE DATABASE avalicao_final;
USE avalicao_final;

CREATE TABLE cepUser {
    cep INT UNIQUE NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    uf CHAR(2) NOT NULL
}

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_nasc DATE NOT NULL,
    user_cep INT NOT NULL,
    FOREIGN KEY (user_cep) REFERENCES cepUser(cep)
);