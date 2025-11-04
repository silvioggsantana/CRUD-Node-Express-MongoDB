# CRUD Node + Express + MongoDB

Este projeto é uma **API simples** desenvolvida com **Node.js**, **Express** e **MongoDB**, utilizando o **Mongoose** como ORM.  
O objetivo é demonstrar os conceitos básicos de um CRUD (Create, Read, Update, Delete) integrando com um banco de dados NoSQL.

---

## 🚀 Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript  
- **Express.js** — framework para criação de rotas e servidor  
- **MongoDB** — banco de dados NoSQL  
- **Mongoose** — modelagem e interação com o MongoDB  
- **Dotenv** — gerenciamento de variáveis de ambiente

---

## 📁 Estrutura de pastas

```
CRUD-Node-Express-MongoDB/
│
├── src/
│   ├── server.js          # Arquivo principal do servidor
│   └── vendaMensal.js # Schema sobre a collection vendaMensal
├── .env                  # Variáveis de ambiente (URI do MongoDB)
├── package.json          # Dependências e scripts
├── .gitignore
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/silvioggsantana/CRUD-Node-Express-MongoDB.git
```

### 2️⃣ Entrar na pasta do projeto
```bash
cd CRUD-Node-Express-MongoDB
```

### 3️⃣ Instalar as dependências
```bash
npm install 
```

### 4️⃣ Configurar o arquivo `.env`
Crie o arquivo `.env` na raiz do projeto e adicione sua URI do MongoDB:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nomeDoBanco
```

### 5️⃣ Executar o servidor
```bash
npm start
```

O servidor será iniciado em:
```
http://localhost:3000
```

E se tudo estiver certo, você verá:
```
✅ Conectado ao MongoDB
🚀 Servidor rodando em http://localhost:3000
```

---

## 🧠 Conceitos aplicados

- Conexão com banco de dados MongoDB usando **Mongoose**
- Estruturação de um projeto Node.js com **Express**
- Criação de **Schemas** e **Models**
- Implementação de **rotas CRUD**
- Uso de **variáveis de ambiente** com **Dotenv**
- Boas práticas de organização e modularização de código

---

## 📬 Endpoints principais (exemplo)

| Método     | Rota          | Descrição                                 |
| ---------- | ------------- | ----------------------------------------- |
| **GET**    | `/vendas`     | Lista todas as vendas mensais cadastradas |
| **POST**   | `/vendas`     | Cadastra uma nova venda mensal            |
| **PUT**    | `/vendas/:id` | Atualiza os dados de uma venda existente  |
| **DELETE** | `/vendas/:id` | Remove uma venda mensal pelo ID           |


---

## 🧑‍💻 Autor

**Silvio Gabriel Santana**  
💼 [LinkedIn](https://www.linkedin.com/in/silvio-gabriel-santana)  
🐙 [GitHub](https://github.com/silvioggsantana)

---

## 🌟 Próximos passos

- Criar uma **interface front-end** para consumir a API  
- Implementar **validações e middlewares**  
- Adicionar **autenticação JWT**  

---

> 💡 Projeto desenvolvido como parte de um estudo prático de integração entre **Node.js**, **Express** e **MongoDB**, explorando os conceitos fundamentais de APIs RESTful.

---

```
Made with 💚 using Node.js and MongoDB
```
