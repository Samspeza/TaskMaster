README do Backend (Node.js)

# Task Master Backend

Este é o backend do projeto **Task Master**, uma aplicação para gerenciamento de tarefas. O backend é construído usando **Node.js**, **Express** e **MongoDB**.

## Requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) (ou um banco de dados MongoDB na nuvem, como MongoDB Atlas)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/task-master-backend.git
   cd task-master-backend

    Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias:

MONGO_URI=<sua_string_de_conexao_mongodb>
PORT=5000

Inicie o servidor:

    npm start

    O servidor estará rodando em http://localhost:5000.

Rotas
/api/tasks

    GET: Obtém todas as tarefas.

    POST: Cria uma nova tarefa. Exemplo de corpo da requisição:

    {
      "title": "Nova Tarefa",
      "description": "Descrição da tarefa"
    }

/api/tasks/:id

    GET: Obtém uma tarefa específica.

    PUT: Atualiza uma tarefa existente. Exemplo de corpo da requisição:

    {
      "title": "Tarefa Atualizada",
      "description": "Descrição atualizada"
    }

    DELETE: Deleta uma tarefa específica.

/api/tasks/:id/complete

    PUT: Marca uma tarefa como concluída.

Licença

Este projeto está licenciado sob a MIT License.


---

### **README do Frontend (React)**

```markdown
# Task Master Frontend

Este é o frontend do projeto **Task Master**, uma aplicação de gerenciamento de tarefas construída com **React** e **Material-UI**.

## Requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/task-master-frontend.git
   cd task-master-frontend

    Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

    npm start

    O aplicativo estará rodando em http://localhost:3000.

Funcionalidades

    Visualização de tarefas: Exibe todas as tarefas criadas, com a opção de marcá-las como concluídas.

    Criação de tarefas: Permite adicionar novas tarefas com título e descrição.

    Edição de tarefas: Permite editar as tarefas já criadas.

    Filtragem de tarefas: Exibe tarefas filtradas por status (pendente ou concluída).

    Design responsivo: Utiliza o Material-UI para criar uma interface limpa e responsiva.

Integração com o Backend

Este frontend se comunica com o backend do Task Master. Para configurar o backend, siga as instruções no README do Backend.

No arquivo src/axios.js, a URL da API é configurada para o backend:

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Altere se necessário
});

---

