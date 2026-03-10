# User List App — React + Vite

A React application that fetches and displays a list of users from a public REST API.

**Student:** Kartik Patel | **Roll No:** 23BAI70520

---

## Features

- Fetches user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Displays each user's **Name** and **Email**
- Shows a loading state while data is being fetched
- Handles and displays API errors gracefully

## Concepts Covered

- `useEffect` Hook — runs API call on component mount
- `useState` Hook — stores users, loading, and error state
- `fetch` API — makes HTTP GET request to external API
- `Array.map()` — dynamically renders the user list

## Folder Structure

```
src/
├── components/
│   └── Users.jsx   ← fetches and renders user list
├── App.jsx         ← root component
├── main.jsx        ← entry point
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
