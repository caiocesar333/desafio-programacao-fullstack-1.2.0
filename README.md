# Challenge-programming-fullstack-1.2.0

This project is a challenge answer requested by Hubla. The objective of this
test is to evaluate my programming skills.

## Software Description

```
A new urgent demand has arisen and we need an exclusive area to upload a file of transactions made in the sale of products by Hubla customers.

Our platform works on the creator-affiliate model, so a creator can sell their products and have one or more affiliates also selling those products, as long as a commission is paid per sale.

A financial transaction is a purchase and sale contract. In the context of the statement, we will consider that each transaction results in a change in the balance, which can be from the producer or affiliate.

My task was to build a web interface that allows the upload of a file of transactions of sold products, normalize the data, and store it in a relational database.

I used the sales.txt file to test the application. The format is described in the section "Format of the input file".
```

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

See **[Deployment](#-deployment)** for notes on how to deploy the project.

### 📋 Prerequisites

```
Visual Studio Code
Docker Desktop

```

### 🔧 Installation

Execute the cloning of the repository with _git -clone
https://github.com/caiocesar333/desafio-programacao-fullstack-1.2.0_

After cloning the repository, open the folder in VSCode

#### For backend:

1. _cd backend_

2. _Build SQL database with Docker_

3. _npm install_ to install dependencies

4. _npm run start:dev_ to build the project

#### For Frontend

1. _cd frontend_

2. _cd react-ts_

3. _npm install_ to install dependencies

4. _npm run dev_ to start development server

5. _npm build_ to build vite and tsc project

## 🐳 Docker

This application can be run inside a Docker container. To build and run the
container, follow the steps below:

1. Install Docker on your machine.
2. Clone the repository and navigate to the project's root directory.
3. Build the Docker image with the following command:

```
docker build -t mongo:latest .
```

4. Run the Docker container with the following command:

```
docker run -p 27017:27017 mongo:latest
```

This will start the container and map port 27017 from the container to port
27017 on your local machine. You can then access the application by navigating
to `http://localhost:8000` in your web browser.

## ⚙️ Running the tests

To run the tests for this project, follow the steps below:

### 🔩 Break down into end-to-end tests

The backend tests can be run by following these steps:

1. Open your terminal and navigate to the root directory of the project.
2. Run the command `npm test` to execute the backend tests.

This should run the backend tests for GetSalesController and
CreateSaleController

### ⌨️ And coding style tests

The frontend tests can be run by following these steps:

1. Open your terminal and navigate to the `frontend/react-ts` directory.
2. Run the command `npm test` to execute the frontend tests.

This should run the frontend tests for ErrorComponent and TransactionsTable
commponents

These tests are designed to check the code for any syntax errors and to ensure
that it conforms to the coding style standards used in this project. Running
these tests before committing code changes is highly recommended.

##### Check the **[Sales](#-sales)** to see the tests content

_P.S: Note that "DeleteSales" doenst have tests because its a optional
functionality made for table and database control while debugging the
application in development server/mode._

## 🛠️ Built With

Here are the tools used to create this project:

- [React](https://reactjs.org/) - A JavaScript library for building user
  interfaces
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
  that compiles to plain JavaScript
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8
  JavaScript engine
- [Express](https://expressjs.com/) - A popular web application framework for
  Node.js
- [MongoDB](https://www.mongodb.com/) - A cross-platform document-oriented NoSQL
  database
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom user interfaces
- [Jest](https://jestjs.io/) - A JavaScript testing framework designed to ensure
  the correctness of any JavaScript codebase

## 📌 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/caiocesar333/project/tags).

## ✒️ Authors

[Caio César](https://github.com/caiocesar333)

## 📄 License

This project is a challenge and is not licensed - see the
[LICENSE.md](https://github.com/caiocesar333/project/license) file for details.

## Sales

```
12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12021-12-03T11:46:02-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
22022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000012750THIAGO OLIVEIRA
42022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500THIAGO OLIVEIRA
32022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500JOSE CARLOS
12022-01-22T08:59:13-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-02-01T23:35:43-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
22022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000155000CARLOS BATISTA
22022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000155000CAROLINA MACHADO
22022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000155000CELSO DE MELO
42022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000CARLOS BATISTA
42022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000CAROLINA MACHADO
42022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000CELSO DE MELO
32022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
32022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
32022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
12022-02-19T05:33:07-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-03-01T02:09:54-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12022-03-03T09:07:35-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
12022-03-03T13:12:16-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA

```
