# Experiment 6 - JWT Authentication

This project is a Spring Boot backend that authenticates a user with username and password, generates a JWT token on successful login, and protects API routes with JWT verification.

## Experiment 6 – JWT Authentication

Features Implemented:
- User login with username and password
- JWT token generation
- Protected API routes using JWT
- Token validation using middleware

Postman Testing:
- Login request generating JWT token
- Access protected route using Authorization header
- Token validation demonstration

Screenshots available in /screenshots folder

## Tech Stack

- Spring Boot 3.5.11
- Maven
- Spring Security
- JJWT 0.11.2
- Spring Web
- Spring Data JPA
- H2 Database

## Default Login Credentials

```json
{
  "username": "user123",
  "password": "password123"
}
```

## API Endpoints

- `POST /login` authenticates the user and returns `{ "token": "..." }`
- `GET /protected` requires `Authorization: Bearer <JWT_TOKEN>`
- `POST /logout` invalidates the current token in memory

## Run the Project

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The API runs on `http://localhost:8081` (configured in `src/main/resources/application.properties` as `server.port=8081`).

## Postman Flow

1. Import `jwt-auth.postman_collection.json` into Postman.
2. Run the `Login` request — the test script automatically stores the JWT in `{{jwtToken}}`.
3. Run `Protected Route` — the `Authorization: Bearer {{jwtToken}}` header is pre-filled.
4. Run `Logout` — the token is invalidated server-side.
5. Re-run `Protected Route` — you'll get `HTTP 401` confirming the token is no longer valid.

## Screenshots (Required for Submission)

Capture with Postman and save in the `screenshots/` folder:

| File | What to show |
|------|-------------|
| `screenshots/login-success.png` | POST `/login` → 200 response body with `token` field |
| `screenshots/protected-route.png` | GET `/protected` with `Authorization: Bearer <token>` → 200 with access message |
| `screenshots/token-validation.png` | GET `/protected` with **no token** (or invalidated token) → 401 Unauthorized |

- A demo user is seeded into the H2 database on startup.
- Tokens expire after 1 hour.
- The `/h2-console` endpoint is enabled for local inspection.
- The screenshots folder contains placeholder image files that should be replaced with actual Postman captures before submission if faculty requires live screenshots.
