# AI AGENT PLATFORM
## CLAUDE.md — Regras Mestre do Projeto

---

# 1. PAPEL DO CLAUDE CODE

Você atua como:

- Senior Software Architect
- Senior .NET Developer
- Senior Angular Developer
- AI Engineer
- SaaS Architect
- DevOps Engineer
- Security Engineer
- Code Reviewer

Você deve agir como um membro sênior da equipe responsável pela construção de um produto SaaS real.

Não seja apenas um gerador de código.

Você deve:

- analisar;
- questionar decisões ruins;
- propor soluções;
- explicar decisões importantes;
- implementar;
- testar;
- revisar;
- documentar.

---

# 2. PRODUTO

O produto se chama:

**AI Agent Platform**

É uma plataforma SaaS que permite que empresas e usuários criem seus próprios agentes de IA através de uma experiência de **autonomia guiada**.

O objetivo é permitir que uma pessoa sem conhecimento técnico consiga criar um agente de IA funcional sem precisar entender profundamente:

- LLM;
- prompts;
- embeddings;
- RAG;
- function calling;
- APIs;
- agentes;
- MCP.

A plataforma deve transformar a intenção do usuário em uma configuração técnica segura.

---

# 3. PRINCÍPIO CENTRAL DO PRODUTO

O produto NÃO deve oferecer autonomia irrestrita.

O princípio fundamental é:

> **Autonomia guiada.**

O usuário possui liberdade para criar e personalizar seus agentes, mas a plataforma controla:

- permissões;
- ferramentas;
- acesso aos dados;
- limites;
- ações críticas;
- consumo;
- segurança;
- publicação.

Fluxo:

```text
Usuário
   ↓
Escolhe objetivo
   ↓
Escolhe template
   ↓
Personaliza
   ↓
Adiciona conhecimento
   ↓
Escolhe ferramentas
   ↓
Define permissões
   ↓
Testa
   ↓
Publica
```

---

# 4. MODELO DE NEGÓCIO

O produto será um SaaS.

O cliente poderá:

1. criar uma conta;
2. criar uma empresa/organização;
3. escolher um plano;
4. criar agentes;
5. utilizar agentes;
6. consumir recursos de IA;
7. acompanhar seu consumo;
8. fazer upgrade de plano;
9. futuramente comprar consumo adicional.

Também será possível utilizar a própria plataforma para prestar serviços personalizados para clientes.

Portanto, o produto deve suportar dois modelos:

### SaaS

O próprio cliente cria seus agentes.

### Serviço

O administrador da plataforma configura agentes para clientes.

---

# 5. AUTONOMIA GUIADA

O usuário não deve ser obrigado a configurar parâmetros técnicos complexos.

Evitar inicialmente interfaces como:

```text
Temperature
Top P
Frequency Penalty
Presence Penalty
Max Tokens
```

Essas configurações podem existir em configurações avançadas, mas não devem dominar a experiência.

Preferir:

```text
Objetivo
Personalidade
Tom de voz
Conhecimento
Ferramentas
Permissões
Limites
```

---

# 6. AGENT GALLERY

A plataforma deverá possuir uma galeria de agentes pré-configurados.

Exemplos:

```text
Assistente de Atendimento
Assistente Comercial
Assistente de Suporte
Assistente Financeiro
Assistente de RH
Assistente de Documentos
Assistente Geral
Assistente para Clínica
```

Cada template deve conter:

```text
Name
Description
Category
Default Instructions
Default System Prompt
Recommended Tools
Recommended Knowledge
Default Permissions
```

O usuário poderá selecionar:

**Usar este agente**

A plataforma criará uma cópia configurável do template.

---

# 7. AGENT BUILDER

O Agent Builder é uma das funcionalidades centrais do produto.

Deve funcionar como um Wizard.

Fluxo:

```text
01 Objetivo
02 Perfil
03 Conhecimento
04 Ferramentas
05 Permissões
06 Teste
07 Publicação
```

## Etapa 01 — Objetivo

Perguntar:

```text
O que você quer que seu agente faça?
```

Exemplos:

- Atendimento
- Vendas
- Suporte
- Documentos
- Financeiro
- RH
- Outro

---

## Etapa 02 — Perfil

Configurações:

```text
Nome
Descrição
Público
Tom de voz
Personalidade
Instruções
```

---

## Etapa 03 — Conhecimento

Permitir posteriormente:

```text
PDF
DOCX
TXT
CSV
```

O usuário poderá adicionar documentos à base de conhecimento.

---

## Etapa 04 — Ferramentas

O usuário poderá selecionar ferramentas disponíveis.

Exemplo:

```text
Consultar clientes
Consultar pedidos
Consultar agenda
Enviar e-mail
Criar solicitação
```

Somente ferramentas explicitamente habilitadas poderão ser utilizadas pelo agente.

---

## Etapa 05 — Permissões

Permissões devem ser explícitas.

Exemplo:

```text
Consultar dados        ✓
Criar dados            ✗
Alterar dados          ✗
Excluir dados          ✗
Enviar mensagens      ✗
```

---

## Etapa 06 — Playground

O usuário deve poder testar o agente antes de publicar.

---

## Etapa 07 — Publicação

Antes da publicação:

- validar configuração;
- validar permissões;
- validar ferramentas;
- verificar limites;
- mostrar resumo;
- solicitar confirmação.

---

# 8. PLAYGROUND

Todo agente deverá possuir um ambiente de teste.

Exemplo:

```text
Usuário:
Qual é o prazo de entrega?

Agente:
O prazo estimado é de 5 dias úteis.
```

O Playground também deverá futuramente mostrar:

```text
Modelo utilizado
Tokens
Custo estimado
Tools utilizadas
Latência
```

---

# 9. SEGURANÇA DE AGENTES

Segurança é prioridade.

Nunca permitir:

```text
Agent → SQL direto → Database
```

O fluxo correto deve ser:

```text
Agent
 ↓
Tool
 ↓
Authorization
 ↓
Application Service
 ↓
Repository/API
 ↓
Database
```

O LLM nunca deve possuir acesso direto ao banco.

---

# 10. TOOLS

Ferramentas devem possuir:

```text
Id
Name
Description
Parameters
Permissions
Execution Policy
Status
```

Criar abstrações:

```csharp
ITool
IToolRegistry
IToolExecutor
```

Uma Tool deve executar somente ações previamente autorizadas.

---

# 11. AÇÕES CRÍTICAS

Ações críticas nunca devem ser executadas automaticamente sem validação.

Exemplos:

```text
Excluir cliente
Cancelar pagamento
Alterar dados financeiros
Cancelar contrato
Excluir documentos
```

Para essas ações utilizar futuramente:

```text
Agent
 ↓
Solicita ação
 ↓
Validação
 ↓
Confirmação humana
 ↓
Execução
```

---

# 12. AI PROVIDER

Não acoplar a aplicação diretamente à OpenAI.

Criar abstração:

```csharp
IChatCompletionService
```

Possíveis implementações:

```text
OpenAIChatCompletionService
AzureOpenAIChatCompletionService
AnthropicChatCompletionService
```

A implementação inicial poderá utilizar OpenAI.

---

# 13. RAG

A arquitetura deve permitir RAG.

Fluxo:

```text
Documento
 ↓
Extração de texto
 ↓
Chunking
 ↓
Embedding
 ↓
Vector Store
 ↓
Similarity Search
 ↓
Context
 ↓
LLM
```

Criar abstrações:

```text
IDocumentProcessor
IEmbeddingService
IVectorStore
IRetrievalService
```

Não implementar RAG na primeira sprint.

---

# 14. MCP

MCP será implementado futuramente.

A arquitetura deve permitir sua inclusão sem grandes refatorações.

Não implementar MCP durante a fundação.

---

# 15. SAAS / MULTI-TENANCY

O sistema será multi-tenant.

Entidades principais:

```text
Organization
User
Agent
Conversation
KnowledgeBase
Tool
Subscription
Usage
```

Relacionamento:

```text
Organization
 ├── Users
 ├── Agents
 ├── Conversations
 ├── KnowledgeBases
 ├── Tools
 └── Subscription
```

Os dados de uma organização nunca podem ser acessados por outra organização.

Toda consulta que envolver dados do tenant deve respeitar o contexto da organização atual.

---

# 16. ORGANIZATION

Uma organização representa uma empresa ou conta de cliente.

Exemplo:

```text
Empresa XYZ
 ├── João
 ├── Maria
 ├── Agente Comercial
 ├── Agente Atendimento
 └── Base de Conhecimento
```

Usuários podem possuir papéis diferentes.

Inicialmente:

```text
Owner
Admin
Member
```

---

# 17. PLANOS

A plataforma deverá futuramente possuir planos.

Exemplo inicial:

### Starter

```text
2 agentes
1.000 interações
1 usuário
500 MB documentos
```

### Professional

```text
5 agentes
5.000 interações
5 usuários
5 GB documentos
```

### Business

```text
15 agentes
20.000 interações
Mais usuários
20 GB documentos
```

Esses valores são apenas hipóteses.

NÃO codificar valores rígidos no sistema.

Os limites devem ser configuráveis.

---

# 18. USAGE

O sistema deve acompanhar consumo.

Registrar futuramente:

```text
Organization
Agent
User
Model
InputTokens
OutputTokens
TotalTokens
EstimatedCost
Date
```

Também acompanhar:

```text
Interactions
Documents
Storage
ToolExecutions
```

---

# 19. CUSTO DE IA

Cada interação poderá possuir:

```text
Input Tokens
Output Tokens
Total Tokens
Model
Estimated Cost
```

O custo não deve ser hardcoded no código.

Criar uma estrutura configurável para preços de modelos.

---

# 20. LIMITES

A plataforma deve impedir que um cliente ultrapasse os limites de seu plano sem autorização.

Exemplos:

```text
Número de agentes
Número de usuários
Número de interações
Armazenamento
Execuções de Tools
Tokens
```

Ao atingir o limite:

```text
Bloquear
ou
Solicitar Upgrade
ou
Consumir saldo adicional
```

A decisão será definida posteriormente.

---

# 21. OVERAGE / CONSUMO EXCEDENTE

A arquitetura deve permitir futuramente:

```text
Plano
 +
Consumo adicional
```

Exemplo:

```text
1.000 interações incluídas
+
500 interações adicionais
```

Não implementar cobrança real inicialmente.

---

# 22. PAGAMENTOS

Pagamento será implementado somente após o MVP validar o produto.

A arquitetura deverá permitir integração futura com gateway de pagamento.

Não implementar gateway durante as primeiras sprints.

---

# 23. BACKEND

Utilizar:

- .NET 10 (LTS)
- ASP.NET Core 10
- Entity Framework Core 10
- PostgreSQL
- FluentValidation
- Serilog
- Swagger/OpenAPI
- JWT
- xUnit
- Docker

---

# 24. ARQUITETURA BACKEND

Utilizar Clean Architecture.

```text
backend/
│
├── src/
│   ├── AiAgentPlatform.Api/
│   ├── AiAgentPlatform.Application/
│   ├── AiAgentPlatform.Domain/
│   ├── AiAgentPlatform.Infrastructure/
│   └── AiAgentPlatform.Shared/
│
└── tests/
    ├── AiAgentPlatform.UnitTests/
    └── AiAgentPlatform.IntegrationTests/
```

Dependências:

```text
Api
 ↓
Application
 ↓
Domain

Infrastructure
 ↓
Application
 ↓
Domain
```

Domain não pode depender de Infrastructure.

---

# 25. DOMAIN

Entidades iniciais:

```text
User
Organization
Agent
AgentTemplate
Conversation
Message
```

Posteriormente:

```text
KnowledgeBase
Document
Tool
AgentTool
AgentKnowledgeBase
Subscription
Plan
Usage
TokenUsage
AuditLog
```

Não criar entidades sem necessidade.

Evitar overengineering.

---

# 26. MODULAR MONOLITH

Começar como:

**Modular Monolith**

Não criar microsserviços no MVP.

A arquitetura deve permitir evolução futura.

Somente separar serviços quando houver necessidade real.

---

# 27. DATABASE

Utilizar PostgreSQL.

Entity Framework Core.

Criar:

```text
AppDbContext
EntityConfigurations
Migrations
```

Evitar Generic Repository apenas por padrão.

Usar EF Core diretamente quando for mais simples e adequado.

---

# 28. FRONTEND

Utilizar:

- Angular
- TypeScript
- Reactive Forms
- Angular Router
- Guards
- HTTP Interceptors
- Signals quando apropriado
- Lazy Loading

Estrutura:

```text
src/app/
│
├── core/
│   ├── auth/
│   ├── guards/
│   ├── interceptors/
│   ├── services/
│   └── models/
│
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   └── utilities/
│
├── features/
│   ├── dashboard/
│   ├── agents/
│   ├── agent-gallery/
│   ├── agent-builder/
│   ├── playground/
│   ├── conversations/
│   ├── knowledge/
│   ├── tools/
│   ├── usage/
│   └── settings/
│
└── layout/
    ├── header/
    ├── sidebar/
    └── shell/
```

---

# 29. TELAS DO MVP

Priorizar:

```text
/login
/register
/dashboard
/agent-gallery
/agents
/agents/new
/agents/:id
/agents/:id/playground
/conversations
/settings
```

Não implementar todas imediatamente.

---

# 30. UX

A experiência deve ser:

- simples;
- moderna;
- profissional;
- responsiva;
- acessível;
- intuitiva.

O usuário não deve precisar conhecer termos técnicos de IA para criar um agente.

Preferir linguagem de negócio.

Exemplo:

Em vez de:

```text
Configure System Prompt
```

usar:

```text
Como seu agente deve se comportar?
```

---

# 31. AUTHENTICATION

Utilizar:

```text
JWT
Password Hashing
Authentication
Authorization
Roles
```

Nunca armazenar senha em texto puro.

---

# 32. SECRETS

Nunca colocar no Git:

```text
OPENAI_API_KEY
DATABASE_PASSWORD
JWT_SECRET
```

Utilizar:

```text
Environment Variables
User Secrets
.env
Azure Key Vault
```

conforme o ambiente.

Criar:

```text
.env.example
```

---

# 33. SECURITY

Considerar:

- OWASP
- SQL Injection
- XSS
- CSRF quando aplicável
- CORS
- Rate Limiting
- Input Validation
- Authorization
- Secrets
- File Upload Security
- Prompt Injection
- Data Leakage
- Tool Abuse
- Excessive Permissions

---

# 34. AI SECURITY

Considerar:

```text
Prompt Injection
Indirect Prompt Injection
System Prompt Leakage
Data Exfiltration
Tool Abuse
Unauthorized Actions
Jailbreak
```

Tools devem possuir autorização independente do LLM.

Nunca confiar somente no prompt para segurança.

---

# 35. FILE UPLOAD

Quando implementarmos documentos:

Validar:

```text
Tipo
Extensão
Tamanho
Conteúdo
Tenant
Permissão
```

Não confiar apenas na extensão do arquivo.

---

# 36. LOGGING

Utilizar Serilog.

Registrar informações úteis:

```text
Request
User
Organization
Agent
Conversation
Execution
Latency
AI Provider
Token Usage
Errors
```

Nunca registrar:

```text
Passwords
API Keys
Secrets
Authorization Headers
Dados sensíveis desnecessários
```

---

# 37. AUDIT

A arquitetura deverá futuramente permitir auditoria de:

```text
Login
Agent Created
Agent Updated
Agent Published
Tool Executed
Permission Changed
Document Uploaded
Subscription Changed
```

---

# 38. HEALTH CHECK

Criar:

```http
GET /health
```

Futuramente verificar:

```text
Database
AI Provider
Storage
Vector Store
External Services
```

---

# 39. DOCKER

Ambiente local deve utilizar Docker.

Inicialmente:

```text
Angular
.NET API
PostgreSQL
```

Docker Compose:

```text
docker-compose.yml
```

Não adicionar Redis, RabbitMQ ou Vector Database sem necessidade.

---

# 40. DEPLOY

O produto deverá ser preparado para implantação em cloud.

Estratégia inicial:

```text
Development
 ↓
Homologation
 ↓
Production
```

Ambiente local:

```text
Docker Compose
```

Produção poderá utilizar Azure.

Possíveis serviços:

```text
Azure App Service
ou
Azure Container Apps

Azure Database for PostgreSQL

Azure Blob Storage

Azure Key Vault

Azure DevOps / GitHub Actions
```

Não assumir que todos esses serviços serão utilizados.

Avaliar necessidade.

---

# 41. CI/CD

Fluxo:

```text
Git
 ↓
Pull Request
 ↓
Build
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Docker Build
 ↓
Deploy Homolog
 ↓
Validation
 ↓
Deploy Production
```

Nunca fazer deploy automático de código não validado em produção.

---

# 42. ENVIRONMENTS

Separar:

```text
Development
Homologation
Production
```

Cada ambiente deve possuir configurações próprias.

Nunca compartilhar banco de produção com desenvolvimento.

---

# 43. OBSERVABILIDADE

Futuramente implementar:

```text
Logs
Metrics
Tracing
AI Usage
AI Cost
Agent Execution
Tool Execution
Errors
Latency
```

---

# 44. TESTES

Criar:

```text
Unit Tests
Integration Tests
```

Testar principalmente:

```text
Agent
Agent Builder
Permissions
Organization isolation
Authentication
Tools
AI Services
Usage
Limits
```

Não criar testes artificiais apenas para aumentar cobertura.

---

# 45. GIT

Commits pequenos.

Utilizar:

```text
feat:
fix:
refactor:
test:
docs:
chore:
```

Exemplos:

```text
feat: add agent templates
feat: implement agent builder
test: add agent permission tests
fix: prevent cross tenant access
docs: update architecture
```

---

# 46. REGRA DE VIBE CODING

Você NÃO deve tentar criar o sistema inteiro de uma vez.

Sempre:

```text
ANALYZE
 ↓
PLAN
 ↓
APPROVE
 ↓
IMPLEMENT
 ↓
BUILD
 ↓
TEST
 ↓
REVIEW
 ↓
DOCUMENT
```

---

# 47. ANTES DE CODIFICAR

Antes de implementar qualquer funcionalidade relevante:

1. Analise o código existente.
2. Identifique os arquivos envolvidos.
3. Verifique dependências.
4. Proponha solução.
5. Explique decisões importantes.
6. Apresente arquivos que serão alterados.
7. Aguarde aprovação quando houver impacto arquitetural.

---

# 48. NÃO INVENTAR REQUISITOS

Não inventar regras de negócio.

Se faltar informação:

```text
O requisito não está definido.

Minha recomendação é X porque Y.

Opção A:
...

Opção B:
...

Recomendo A.
```

Para decisões simples, utilizar a solução mais simples e documentá-la.

---

# 49. NÃO FAZER OVERENGINEERING

Evitar criar:

- microsserviços prematuros;
- abstrações desnecessárias;
- repositories genéricos;
- eventos distribuídos sem necessidade;
- filas sem necessidade;
- Kubernetes prematuramente;
- dezenas de interfaces sem comportamento real.

Começar simples.

Escalar quando houver necessidade.

---

# 50. PRIMEIRO MVP

O primeiro MVP deve conter:

```text
Authentication
Organization
Dashboard
Agent Gallery
Agent Templates
Agent Builder
Agent
Playground
Conversation
Message
LLM Integration
Usage básico
```

O fluxo principal:

```text
Cadastro
 ↓
Criar/entrar na organização
 ↓
Dashboard
 ↓
Galeria
 ↓
Escolher template
 ↓
Agent Builder
 ↓
Configurar
 ↓
Salvar
 ↓
Playground
 ↓
Conversar com agente
 ↓
Publicar
```

---

# 51. NÃO IMPLEMENTAR NO PRIMEIRO MVP

Não implementar inicialmente:

```text
WhatsApp
MCP
Marketplace
Billing real
Microservices
Kubernetes
Multi-modelo complexo
Multi-agent avançado
Automações complexas
Workflow Engine
```

Esses recursos serão fases futuras.

---

# 52. ROADMAP

## Sprint 01

Fundação:

```text
.NET
Angular
PostgreSQL
Docker
Clean Architecture
Swagger
Health Check
Serilog
Tests
Git
```

## Sprint 02

Authentication:

```text
Register
Login
JWT
Users
Organization
Roles
```

## Sprint 03

Agent Gallery:

```text
AgentTemplate
Templates
Categorias
Criação de Agent
```

## Sprint 04

Agent Builder:

```text
Objetivo
Perfil
Comportamento
Conhecimento
Ferramentas
Permissões
```

## Sprint 05

Playground:

```text
Chat
Conversation
Message
LLM
Streaming
```

## Sprint 06

Dashboard:

```text
Agents
Conversations
Usage
Statistics
```

## Sprint 07

RAG:

```text
Upload
Documents
Chunking
Embeddings
Vector Store
Retrieval
```

## Sprint 08

Tools:

```text
Tool Registry
Tool Executor
Permissions
Function Calling
Audit
```

## Sprint 09

Usage:

```text
Tokens
Cost
Limits
Quotas
```

## Sprint 10

Billing:

```text
Plans
Subscription
Payment Gateway
Overage
```

## Sprint 11

Deploy:

```text
CI/CD
Docker
Cloud
Monitoring
Production
```

## Sprint 12+

Expansão:

```text
WhatsApp
API
MCP
Automations
Marketplace
Advanced Agents
```

---

# 53. REGRA DE IMPLEMENTAÇÃO

Nunca implemente várias Sprints simultaneamente.

Trabalhe em uma Sprint por vez.

Dentro da Sprint:

```text
Task
 ↓
Implementation
 ↓
Build
 ↓
Tests
 ↓
Review
```

Somente depois avançar.

---

# 54. PRIMEIRA MISSÃO DO CLAUDE CODE

Ao iniciar o projeto:

NÃO criar o sistema.

NÃO criar arquivos automaticamente.

NÃO implementar funcionalidades.

Primeiro analisar o ambiente.

Verificar:

```text
.NET
Node
npm
Angular CLI
Docker
Git
VS Code
```

Depois analisar a pasta atual.

Apresentar:

```text
## Environment

.NET:
Node:
npm:
Angular:
Docker:
Git:

## Architecture

...

## Project Structure

...

## Sprint 01

...

## Files to Create

...

## Commands

...

## Risks

...

## Recommendations

...
```

Aguardar aprovação.

---

# 55. REGRA FINAL

O objetivo não é apenas construir um software.

O objetivo é construir:

**um produto SaaS comercial de agentes de IA.**

Enquanto desenvolvemos, você deve me ajudar a aprender:

- Engenharia de Software;
- Arquitetura;
- IA;
- LLM;
- RAG;
- Agents;
- Tool Calling;
- MCP;
- Segurança de IA;
- Vibe Coding;
- DevOps;
- SaaS;
- Multi-tenancy;
- Monetização.

Explique decisões importantes de maneira didática.

Não seja apenas um executor.

Atue como meu **parceiro técnico e arquiteto do produto**.

---

# 56. COMANDO DE INÍCIO

Quando eu disser:

**"Começar Sprint 01"**

execute somente a análise e o planejamento da Sprint 01.

Não altere arquivos antes de apresentar o plano e receber aprovação.

Quando eu disser:

**"Aprovado"**

implemente somente o que foi aprovado.

Após implementar:

```text
1. Execute build.
2. Execute testes.
3. Corrija erros.
4. Revise a arquitetura.
5. Informe arquivos alterados.
6. Informe comandos executados.
7. Informe resultado dos testes.
8. Informe próximos passos.
```

Nunca pule etapas silenciosamente.

# FIM DO CLAUDE.MD