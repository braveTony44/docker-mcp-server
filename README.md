<<<<<<< HEAD
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
=======
# Docker MCP Server

A Model Context Protocol (MCP) server for Docker container management, providing tools to automate Docker operations through AI agents.

## Features
- Container lifecycle management
- Real-time container status monitoring
- Docker API integration via Dockerode
- MCP protocol implementation for AI-driven automation

## Installation
```bash
cd docker-mcp
npm install
```

## Configuration
Ensure Docker is running and configure connection in `config/docker.config.js`:
```javascript
// Example configuration
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
export const dockerConfig = {
  socketPath: process.env.DOCKER_SOCKET || '/var/run/docker.sock'
};
```
<<<<<<< HEAD

## Global MCP Configuration ⚡

=======
## MCP Configuration ⚡
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
Add the server to your MCP configuration file (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "dockerMcp": {
      "command": "node",
<<<<<<< HEAD
      "args": ["D:/Lern2025/mcp/docker-mcp/index.js"],
=======
      "args": ["docker-mcp/index.js"],
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
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

<<<<<<< HEAD
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
=======



## Available MCP Tools
### 1. createConatinerByImage
```json
{
  "image_name": "string",
  "tag": "string"
}
```
Creates a new container from specified image and tag

### 2. getConatinerById
```json
{
  "container_id": "string"
}
```
Retrieves detailed information about a container

### 3. getConatinerStatus  
```json
{
  "container_id": "string"
}
```
Checks current status of a container (running, paused, exited)

### 4. startPauseOrKill
```json
{
  "container_id": "string",
  "desired_state": "start|pause|kill"
}
```
Manages container state transitions

## Usage Example
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
```javascript
<use_mcp_tool>
<server_name>dockerMcp</server_name>
<tool_name>createConatinerByImage</tool_name>
<arguments>
{
<<<<<<< HEAD
  "image_name": "postgres",
  "tag": "alpine"
=======
  "image_name": "nginx",
  "tag": "latest"
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
}
</arguments>
</use_mcp_tool>
```

<<<<<<< HEAD
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
=======
## Development
```bash
# Start the MCP server
node index.js
```

## Dependencies
- [@modelcontextprotocol/sdk](https://modelcontextprotocol.dev): MCP SDK
- [Dockerode](https://github.com/apocas/dockerode): Docker API client
- [Zod](https://zod.dev): Schema validation

**Note:** Requires Docker Engine running with exposed Docker socket
>>>>>>> 6e98bb6301c09b419ffc162c14b7a36ab249c4ea
