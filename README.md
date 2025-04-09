# Task Manager

A full-stack task manager application built with React.js + Electron (frontend) and NestJS + PosgreSQL (backend).

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/ropotinsviat/task-manager.git
cd task-manager
```

---

## Frontend Setup (Client)

```sh
cd client
yarn install
yarn start
```

The frontend will start at `http://localhost:3000` by default.

---

## Backend + BD Setup (Server)

Docker is reuqired

In a separate terminal:

```sh
cd task-manager/server
docker-compose up -d
npm install
npm run start:dev
```

The backend will start at `http://localhost:3030` and PosgreSQL will be running in background.

---

Now, visit `http://localhost:3000` or use opened window to use the application! 🚀

## Mini-tutorial

1) To filter tasks enter 
    1) Enter the search input (it will seach by title or description)  and press "Enter" or simply click outside of the input 
    2) Select status option from dropdown (Усі, Виконані, Невиконані)
2) You can add your tasks specifying title, description in according fields and status by simply clicking on it
3) You can update any task 
    1) Tap on status to change it
    2) Tap on field to make it editable, edit and then click outside of it
4) You can delete any task clicking on the trash can
