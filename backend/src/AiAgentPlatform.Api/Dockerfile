FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["backend/AiAgentPlatform.sln", "backend/"]
COPY ["backend/src/AiAgentPlatform.Api/AiAgentPlatform.Api.csproj", "backend/src/AiAgentPlatform.Api/"]
COPY ["backend/src/AiAgentPlatform.Application/AiAgentPlatform.Application.csproj", "backend/src/AiAgentPlatform.Application/"]
COPY ["backend/src/AiAgentPlatform.Domain/AiAgentPlatform.Domain.csproj", "backend/src/AiAgentPlatform.Domain/"]
COPY ["backend/src/AiAgentPlatform.Infrastructure/AiAgentPlatform.Infrastructure.csproj", "backend/src/AiAgentPlatform.Infrastructure/"]
COPY ["backend/src/AiAgentPlatform.Shared/AiAgentPlatform.Shared.csproj", "backend/src/AiAgentPlatform.Shared/"]
RUN dotnet restore "backend/src/AiAgentPlatform.Api/AiAgentPlatform.Api.csproj"

COPY backend/. backend/
WORKDIR /src/backend/src/AiAgentPlatform.Api
RUN dotnet publish -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "AiAgentPlatform.Api.dll"]
