# Experiment 7 - Role-Based Authorization (RBAC)

## Tech Stack
- Spring Boot 3.5.11
- Spring Security
- Spring Data JPA
- H2 Database

## Default Demo Users
- `user1 / password`
- `admin1 / password`

## API Endpoints
- `GET /api/public/hello` -> Public
- `GET /api/user/profile` -> `ROLE_USER` and `ROLE_ADMIN`
- `GET /api/admin/dashboard` -> `ROLE_ADMIN` only
- `POST /api/auth/login` -> Login verification endpoint

## Run
```bash
mvn spring-boot:run
```

## Port
- Server runs on `8082`

## H2 Console
- URL: `http://localhost:8082/h2-console`
- JDBC URL: `jdbc:h2:mem:rbac-db`
- Username: `sa`
- Password: (empty)
