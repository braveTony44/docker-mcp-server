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
export const dockerConfig = {
  socketPath: process.env.DOCKER_SOCKET || '/var/run/docker.sock'
};
```
## MCP Configuration ⚡
Add the server to your MCP configuration file (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "dockerMcp": {
      "command": "node",
      "args": ["docker-mcp/index.js"],
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
```javascript
<use_mcp_tool>
<server_name>dockerMcp</server_name>
<tool_name>createConatinerByImage</tool_name>
<arguments>
{
  "image_name": "nginx",
  "tag": "latest"
}
</arguments>
</use_mcp_tool>
```

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
