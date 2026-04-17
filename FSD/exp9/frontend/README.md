# exp9 Frontend (React RBAC Client)

This frontend integrates with the RBAC backend available in the exp9 project.

## Features

- Login with username/password using HTTP Basic auth
- Calls `/api/user/profile` to validate credentials
- Stores `user`, `role`, and auth token in `sessionStorage`
- Role-based routing:
	- `/` -> Login
	- `/user` -> User Dashboard (USER only)
	- `/admin` -> Admin Dashboard (ADMIN only)
- Role-based UI controls and protected API access
- Logout clears session and returns to login

## Install

```bash
npm install
```

## Run

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Backend Connectivity

Two options are supported:

1. CRA proxy (default): requests to `/api/*` are proxied to `http://localhost:8082`
2. Direct backend URL: set `REACT_APP_API_BASE_URL` in `.env`

Example:

```bash
REACT_APP_API_BASE_URL=http://localhost:8080
```

Use the value that matches your backend port.

## Build

```bash
npm run build
```
