# To-Do List API 📝

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-%232D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

A simple and robust REST API for a To-Do List system, developed as a practical study of Node.js best practices, including a feature-based architecture and error handling.

---

## ✨ Features

* **Create** a new task.
* **List** all existing tasks.
* **Get** a specific task by its ID.
* **Update** a task's status (toggle completed/pending).
* **Delete** a task.

---

## 🛠️ Tech Stack

This project was built using a modern and efficient stack:

* **Node.js**: Server-side JavaScript runtime environment.
* **TypeScript**: A typed superset of JavaScript.
* **Express**: Minimalist web framework for building the API.
* **Prisma**: Next-generation ORM for database communication.
* **Zod**: A TypeScript-first schema validation library.
* **Helmet**: Security middleware that sets various HTTP headers.
* **tsx**: A tool to run TypeScript files directly in development without a build step.

---

## 🚀 Getting Started

Follow the steps below to set up and run the project in your local environment.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18 or higher)
* A Prisma-compatible database (e.g., PostgreSQL, MySQL, SQLite)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jbampa/to-do-api.git](https://github.com/Jbampa/to-do-api.git)
    cd to-do-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    * Create a copy of the `.env.example` file and rename it to `.env`.
    * Fill in the `DATABASE_URL` variable with your database connection string.
    * Set the `PORT` on which the server will run (e.g., `PORT=3000`).

4.  **Run the Prisma migrations:**
    This command will create the database tables based on your `schema.prisma` file.
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The server will be running at `http://localhost:3000` (or the port you defined in `.env`).

---

## 📖 API Endpoints

The API has the following endpoints for task manipulation:

| Method | URL          | Description                       | Request Body (Example)                      | Success Response (Example)                   |
| :----- | :----------- | :-------------------------------- | :------------------------------------------ | :------------------------------------------- |
| `POST` | `/tasks`     | Creates a new task.               | `{ "title": "Study automated testing" }`      | `201 Created` with the created task object   |
| `GET`  | `/tasks`     | Lists all registered tasks.       | N/A                                         | `200 OK` with the list of tasks              |
| `GET`  | `/tasks/:id` | Gets a specific task by its ID.   | N/A                                         | `200 OK` with the task data                  |
| `PATCH`| `/tasks/:id` | Updates a task's status (toggle). | N/A                                         | `200 OK` with the updated task data          |
| `DELETE`| `/tasks/:id` | Deletes a specific task by its ID.| N/A                                         | `200 OK` with a success message              |

---

## 📂 Folder Structure

The project uses a **feature-based architecture**, aiming for scalability and code organization. All logic related to a business entity (in this case, `task`) is contained within its own module, facilitating maintenance and the addition of new features.

Claro, com certeza. Aqui está a versão em inglês do README, formatada dentro de um único bloco para facilitar o "copiar e colar".

Você pode clicar no botão "Copiar" no canto superior direito do bloco abaixo e colar todo o conteúdo diretamente no seu arquivo README.md.

Markdown

# To-Do List API 📝

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-%232D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

A simple and robust REST API for a To-Do List system, developed as a practical study of Node.js best practices, including a feature-based architecture and error handling.

---

## ✨ Features

* **Create** a new task.
* **List** all existing tasks.
* **Get** a specific task by its ID.
* **Update** a task's status (toggle completed/pending).
* **Delete** a task.

---

## 🛠️ Tech Stack

This project was built using a modern and efficient stack:

* **Node.js**: Server-side JavaScript runtime environment.
* **TypeScript**: A typed superset of JavaScript.
* **Express**: Minimalist web framework for building the API.
* **Prisma**: Next-generation ORM for database communication.
* **Zod**: A TypeScript-first schema validation library.
* **Helmet**: Security middleware that sets various HTTP headers.
* **tsx**: A tool to run TypeScript files directly in development without a build step.

---

## 🚀 Getting Started

Follow the steps below to set up and run the project in your local environment.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18 or higher)
* A Prisma-compatible database (e.g., PostgreSQL, MySQL, SQLite)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jbampa/to-do-api.git](https://github.com/Jbampa/to-do-api.git)
    cd to-do-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    * Create a copy of the `.env.example` file and rename it to `.env`.
    * Fill in the `DATABASE_URL` variable with your database connection string.
    * Set the `PORT` on which the server will run (e.g., `PORT=3000`).

4.  **Run the Prisma migrations:**
    This command will create the database tables based on your `schema.prisma` file.
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The server will be running at `http://localhost:3000` (or the port you defined in `.env`).

---

## 📖 API Endpoints

The API has the following endpoints for task manipulation:

| Method | URL          | Description                       | Request Body (Example)                      | Success Response (Example)                   |
| :----- | :----------- | :-------------------------------- | :------------------------------------------ | :------------------------------------------- |
| `POST` | `/tasks`     | Creates a new task.               | `{ "title": "Study automated testing" }`      | `201 Created` with the created task object   |
| `GET`  | `/tasks`     | Lists all registered tasks.       | N/A                                         | `200 OK` with the list of tasks              |
| `GET`  | `/tasks/:id` | Gets a specific task by its ID.   | N/A                                         | `200 OK` with the task data                  |
| `PATCH`| `/tasks/:id` | Updates a task's status (toggle). | N/A                                         | `200 OK` with the updated task data          |
| `DELETE`| `/tasks/:id` | Deletes a specific task by its ID.| N/A                                         | `200 OK` with a success message              |

---

## 📂 Folder Structure

The project uses a **feature-based architecture**, aiming for scalability and code organization. All logic related to a business entity (in this case, `task`) is contained within its own module, facilitating maintenance and the addition of new features.

to-do-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── features/
│   │   └── task/
│   │       ├── task.controller.ts
│   │       ├── task.routes.ts
│   │       ├── task.services.ts
│   │       ├── task.validate.ts
│   │       └── task.zod.schema.ts
│   ├── libs/
│   │   └── prisma.ts
│   ├── middlewares/
│   │   └── errorHandler.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
