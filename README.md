# To-Do List API 📝

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-%232D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

Uma API REST simples e robusta para um sistema de lista de tarefas (To-Do List), desenvolvida como um estudo prático de boas práticas em Node.js, incluindo arquitetura por features e tratamento de erros.

---

## ✨ Features

* **Criar** uma nova tarefa.
* **Listar** todas as tarefas existentes.
* **Obter** uma tarefa específica pelo seu ID.
* **Atualizar** o status de uma tarefa (concluída/não concluída).
* **Deletar** uma tarefa.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno e eficiente:

* **Node.js**: Ambiente de execução JavaScript no lado do servidor.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **Express**: Framework minimalista para a construção da API.
* **Prisma**: ORM de próxima geração para comunicação com o banco de dados.
* **Zod**: Biblioteca para validação de esquemas e tipos.
* **Helmet**: Middleware de segurança que define vários cabeçalhos HTTP.
* **tsx**: Executa arquivos TypeScript diretamente em desenvolvimento, sem a necessidade de uma etapa de build.

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* Um banco de dados compatível com o Prisma (ex: PostgreSQL, MySQL, SQLite)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Jbampa/to-do-api.git
    cd to-do-api
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    * Crie uma cópia do arquivo `.env.example` e renomeie para `.env`.
    * Preencha a variável `DATABASE_URL` com a string de conexão do seu banco de dados.
    * Defina a `PORT` em que o servidor irá rodar (ex: `PORT=3000`).

4.  **Execute as migrações do Prisma:**
    Este comando irá criar as tabelas do banco de dados com base no seu `schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O servidor estará rodando no endereço `http://localhost:3000` (ou na porta que você definiu).

---

## 📖 Endpoints da API

A API possui os seguintes endpoints para manipulação de tarefas:

| Método | URL          | Descrição                                         | Corpo da Requisição (Exemplo)               | Resposta de Sucesso (Exemplo)             |
| :----- | :----------- | :------------------------------------------------ | :------------------------------------------ | :---------------------------------------- |
| `POST` | `/tasks`     | Cria uma nova tarefa.                             | `{ "title": "Estudar testes automatizados" }` | `201 Created` com a tarefa criada         |
| `GET`  | `/tasks`     | Lista todas as tarefas cadastradas.               | N/A                                         | `200 OK` com a lista de tarefas           |
| `GET`  | `/tasks/:id` | Obtém uma tarefa específica pelo seu ID.          | N/A                                         | `200 OK` com os dados da tarefa           |
| `PATCH`| `/tasks/:id` | Atualiza o status de uma tarefa (toggle).         | N/A                                         | `200 OK` com os dados da tarefa atualizada|
| `DELETE`| `/tasks/:id` | Deleta uma tarefa específica pelo seu ID.         | N/A                                         | `200 OK` com uma mensagem de sucesso      |

---

## 📂 Estrutura de Pastas

O projeto utiliza uma arquitetura baseada em **features**, visando a escalabilidade e organização do código. Toda a lógica relacionada a uma entidade de negócio (neste caso, `task`) fica contida em seu próprio módulo, facilitando a manutenção e a adição de novas funcionalidades.

```
/src
  /features
    /task
      - task.controller.ts
      - task.service.ts
      - task.routes.ts
      - ...
  /middlewares
  - server.ts
```

---
