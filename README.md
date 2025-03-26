Task Master Backend

Este é o backend do projeto Task Master, uma aplicação para gerenciamento de tarefas. O backend é construído usando Node.js, Express e MongoDB.
Requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

    Node.js (versão 14 ou superior)

    MongoDB (ou um banco de dados MongoDB na nuvem, como o MongoDB Atlas)

Instalação

    Clone este repositório:

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
