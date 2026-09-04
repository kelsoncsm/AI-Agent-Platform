using System.Net;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace AiAgentPlatform.IntegrationTests;

public class HealthChecksTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public HealthChecksTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task Live_ReturnsHealthy_WithoutDependingOnDatabase()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/health/live");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task Ready_ReturnsHealthy_WhenDatabaseIsReachable()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/health/ready");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
