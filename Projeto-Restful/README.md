<h1 align="center"> Projeto RESTful API</h1>

<p align="center">
  <strong>Uma API RESTful desenvolvida com Node.js, Express e NeDB.</strong>
</p>

<p align="center">
  Projeto criado para praticar criação de APIs, rotas REST, manipulação de dados e boas práticas com JavaScript no backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen" alt="Status do projeto">
  <img src="https://img.shields.io/badge/Node.js-18+-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-black" alt="Express">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow" alt="JavaScript">
</p>

---

## Sobre o projeto

A **Projeto RESTful API** é uma aplicação backend desenvolvida com foco em praticar os principais conceitos de APIs REST utilizando Node.js e Express.

O projeto permite realizar operações CRUD completas para gerenciamento de usuários, utilizando persistência local de dados com NeDB.

---

---

## Demonstração

<p align="center">
  <img src="assets/apitest.gif" alt="Demonstração de requisições na API." width="600">
</p>

---

## Funcionalidades

- ✅ Listagem de usuários
- ✅ Cadastro de usuários
- ✅ Atualização de usuários
- ✅ Remoção de usuários
- ✅ Busca por ID
- ✅ Persistência de dados local
- ✅ Estrutura organizada de rotas
- ✅ Tratamento de erros
- ✅ Validação de dados

---

## Tecnologias utilizadas

<div align="center">

| Tecnologia | Descrição |
|---|---|
| Node.js | Ambiente de execução JavaScript |
| Express.js | Framework backend |
| JavaScript | Lógica da aplicação |
| NeDB | Banco de dados local |
| REST API | Arquitetura da API |

</div>

---

## 📂 Estrutura do projeto

```bash
📦 Projeto-Restful
 ┣ 📂 img
 ┣ 📜 apitest.gif
 ┣ 📂 routes
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 users.js
 ┣ 📂 utils
 ┃ ┣ 📜 error.js
 ┃ ┗ 📜 validator.js
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 users.db
 ┗ 📜 README.md
```

---

## Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /users | Lista todos os usuários |
| GET | /users/:id | Busca usuário por ID |
| POST | /users | Cria um novo usuário |
| PUT | /users/:id | Atualiza um usuário |
| DELETE | /users/:id | Remove um usuário |

---

## Como clonar o repositório

```bash
# Clone o repositório
git clone https://github.com/lucasescouto-ux/Projeto-restful.git
```

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Criação de APIs RESTful
- Estruturação de rotas
- Manipulação de requisições HTTP
- CRUD completo
- Persistência de dados
- Validação de dados
- Tratamento de erros
- Organização de projeto backend

<p align="center">
  ⭐ Projeto RESTful API - Trilha Saipos
</p>
