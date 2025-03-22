![Docker MCP](https://img.icons8.com/color/96/000000/docker.png) 
# Docker MCP Server 🐳⚡

Automate Docker operations through AI agents with this powerful Model Context Protocol integration. Manage containers, monitor deployments, and orchestrate workflows using natural language commands.

**Key Features**:
- 🤖 AI-powered container lifecycle management
- ⚡ Real-time status monitoring dashboard
- 🔄 Seamless Docker API integration via Dockerode
- 🧩 Extensible MCP tool ecosystem
- 📡 JSON schema validation with Zod

## Quick Start 🚀

```bash
# Clone and setup
git clone https://github.com/yourusername/docker-mcp.git
cd docker-mcp
npm install

# Start the MCP server (requires Docker running)
node index.js
```

## Configuration ⚙️
```javascript
// config/docker.config.js
export const dockerConfig = {
  socketPath: process.env.DOCKER_SOCKET || '/var/run/docker.sock'
};
```

## Global MCP Configuration ⚡

Add the server to your MCP configuration file (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "dockerMcp": {
      "command": "node",
      "args": ["D:/Lern2025/mcp/docker-mcp/index.js"],
      "env": {},
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

This configuration will:
1. Make the Docker MCP server available system-wide
2. Auto-start with your development environment
3. Allow seamless integration with other MCP tools

## MCP Tools Reference 🛠️

### 1. 🐣 createConatinerByImage
```json
{
  "image_name": "nginx",
  "tag": "latest"
}
```
*Spin up new containers from any Docker image*

### 2. 🔍 getConatinerById
```json
{
  "container_id": "abc123"
}
```
*Get detailed container inspection data*

### 3. 📊 getConatinerStatus  
```json
{
  "container_id": "abc123"
}
```
*Check real-time status (running/paused/exited)*

### 4. 🎮 startPauseOrKill
```json
{
  "container_id": "abc123",
  "desired_state": "start|pause|kill"
}
```
*Control container states with one command*

## Usage Example 🤖
```javascript
<use_mcp_tool>
<server_name>dockerMcp</server_name>
<tool_name>createConatinerByImage</tool_name>
<arguments>
{
  "image_name": "postgres",
  "tag": "alpine"
}
</arguments>
</use_mcp_tool>
```

## Security 🔒
```bash
# For production environments:
export DOCKER_SOCKET="/var/run/docker.sock"  # Restrict socket permissions
```

## Contributing 👥
We welcome contributions! Please follow our [contribution guidelines](CONTRIBUTING.md).

---

**Powered by**:  
[![MCP SDK](https://img.shields.io/badge/MCP_SDK-1.7.0-blue)](https://modelcontextprotocol.dev)
