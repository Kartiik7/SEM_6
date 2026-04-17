# Experiment 9 - RBAC Backend + React Frontend

This experiment keeps the RBAC backend code (copied from Experiment 7) and adds a React frontend in `exp9/frontend`.

## Backend (already present)

### Tech Stack
- Spring Boot 3.5.11
- Spring Security
- Spring Data JPA
- H2 Database

### Default Demo Users
- `user1 / password`
- `admin1 / password`

### API Endpoints
- `GET /api/public/hello` -> Public
- `GET /api/user/profile` -> `ROLE_USER` and `ROLE_ADMIN`
- `GET /api/admin/dashboard` -> `ROLE_ADMIN` only
- `POST /api/auth/login` -> Login verification endpoint

### Backend Run
```bash
mvn spring-boot:run
```

### Backend Port
- Configured at `8082` (`src/main/resources/application.properties`)

### H2 Console
- URL: `http://localhost:8082/h2-console`
- JDBC URL: `jdbc:h2:mem:rbac-db`
- Username: `sa`
- Password: (empty)

## Frontend (new)

Frontend is located in `exp9/frontend` and implements:

- Login using HTTP Basic auth against `GET /api/user/profile`
- Session storage of `user` and `role`
- Role-based routing:
	- `/` -> Login
	- `/user` -> User dashboard (USER only)
	- `/admin` -> Admin dashboard (ADMIN only)
- Role-based UI control:
	- USER cannot see admin dashboard control
	- ADMIN can access admin controls and protected admin API
- Logout clears session storage and redirects to login

### Frontend Run
```bash
cd frontend
npm install
npm start
```

The frontend dev server runs on `http://localhost:3000` by default.

### Backend Connectivity

- Default setup uses CRA proxy in `frontend/package.json`:
	- `/api/*` from frontend is proxied to `http://localhost:8082`
- Optional override:
	- Create `frontend/.env` and set `REACT_APP_API_BASE_URL=http://localhost:8080` (or any backend URL)
	- Example is available in `frontend/.env.example`

## Run Backend + Frontend Together

1. Start backend from `exp9`:
	 ```bash
	 mvn spring-boot:run
	 ```
2. Start frontend from `exp9/frontend`:
	 ```bash
	 npm start
	 ```
3. Open `http://localhost:3000`
4. Login with:
	 - USER: `user1 / password`
	 - ADMIN: `admin1 / password`
