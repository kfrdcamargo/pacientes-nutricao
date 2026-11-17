# Cadastro de Pacientes para Nutricionistas

## Tema

Aplicação web para nutricionistas cadastrarem, consultarem, editarem e excluírem pacientes. Os dados ficam armazenados em um banco MySQL.

Campos do paciente: nome completo, gênero, data de nascimento, CPF (Cadastro de Pessoas Físicas), telefone e e-mail. Cada paciente recebe um ID (identificador) único, gerado automaticamente.

## Tecnologias

Node.js, Express (gerado com express-generator e EJS), MySQL (pacote mysql2) e dotenv.

## Como instalar e executar

Pré-requisitos: Node.js e MySQL instalados.

1. Baixe o projeto e entre na pasta criada: `git clone https://github.com/kfrdcamargo/pacientes-nutricao.git`
2. Instale as dependências: `npm install`
3. Crie o banco de dados executando o arquivo `script.sql` no MySQL Workbench (File > Open SQL Script e depois o ícone do raio para executar).
4. Copie o arquivo de exemplo das variáveis de ambiente: `copy .env.example .env`
5. Abra o arquivo `.env` e preencha `DB_PASSWORD` com a senha do seu MySQL.
6. Inicie o servidor: `npm start`
7. Acesse no navegador: http://localhost:3000

## Rotas

- `GET /` lista os pacientes cadastrados
- `POST /itens` cadastra um novo paciente
- `GET /itens/:id/editar` abre o formulário de edição
- `POST /itens/:id/editar` salva as alterações
- `POST /itens/:id/excluir` exclui o paciente

## Integrantes

- João Victor Soares Barbosa
- Karen Fernanda Ramos de Camargo
- Mateus Henrique Gonçalves Toniatto