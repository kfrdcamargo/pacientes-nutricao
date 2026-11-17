CREATE DATABASE IF NOT EXISTS nutri_pacientes
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE nutri_pacientes;

CREATE TABLE IF NOT EXISTS pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  genero VARCHAR(20) NOT NULL,
  data_nascimento DATE NOT NULL,
  cpf CHAR(11) NOT NULL UNIQUE,
  telefone VARCHAR(15) NOT NULL,
  email VARCHAR(120) NOT NULL
);

INSERT INTO pacientes (nome, genero, data_nascimento, cpf, telefone, email) VALUES
('Mariana Souza Lima', 'Feminino', '1992-03-14', '52998224725', '14998765432', 'mariana.lima@email.com'),
('Carlos Eduardo Pereira', 'Masculino', '1985-11-02', '11144477735', '14997654321', 'carlos.pereira@email.com'),
('Juliana Alves Rocha', 'Feminino', '2000-07-25', '12345678909', '14996543210', 'juliana.rocha@email.com');