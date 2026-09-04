# AI Agent Platform

SaaS de criação de agentes de IA por autonomia guiada. Ver `CLAUDE.md` para as regras completas do projeto.

## Stack (Sprint 01 — fundação)

- .NET 10 LTS / ASP.NET Core 10 / Entity Framework Core 10 / Npgsql
- Angular 22 / TypeScript 6 / Node 24
- PostgreSQL 18
- Docker Compose, Serilog, Swagger/OpenAPI, FluentValidation, xUnit

## Rodando tudo via Docker Compose

```bash
docker compose up -d --build
```

- API: http://localhost:8081 (8080 já está em uso por outro projeto nesta máquina; Swagger em `/swagger`, health checks em `/health/live` e `/health/ready`)
- Web: http://localhost:4200
- PostgreSQL: `localhost:5433` (5432 já está em uso por outro projeto nesta máquina)

## Desenvolvimento local sem container

Backend:

```bash
cd backend
dotnet run --project src/AiAgentPlatform.Api
```

Sobe em `http://localhost:5126` (perfil `http` do `launchSettings.json`).

Frontend (fora do container, com proxy para a API local):

```bash
cd frontend/ai-agent-platform-web
npm start -- --proxy-config proxy.conf.json
```

## Testes

```bash
cd backend
dotnet test
```

Os testes de integração de health check esperam o PostgreSQL do `docker compose` disponível (`docker compose up -d postgres`).
