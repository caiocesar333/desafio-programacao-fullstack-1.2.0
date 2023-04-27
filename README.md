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

### 🔩 Break down into end to end tests

### ⌨️ And coding style tests

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

## 📌 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/caiocesar333/project/tags).

## ✒️ Authors

[Caio César](https://github.com/caiocesar333)

## 📄 License

This project is a challenge and is not licensed - see the
[LICENSE.md](https://github.com/caiocesar333/project/license) file for details.
