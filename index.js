import {
  McpServer,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createConatiner, getConatinerById, getConatinerStatus, startPauseKill } from "./controllers/docker.js";

const server = new McpServer({
  name: "docker-mcp",
  version: "1.0.0",
});

server.tool("createConatinerByImage",
  {
    image_name: z.string(),
    tag: z.string(),
  },
  async ({ image_name, tag }) => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(await createConatiner(image_name, tag)),
        },
      ],
    };
  }
);

server.tool("getConatinerById",{
    container_id:z.string()
},async({container_id})=>{
    return {
        content: [
          {
            type: "text",
            text: JSON.stringify(await getConatinerById(container_id)),
          },
        ],
      };
});

server.tool("getConatinerStatus",{
    container_id:z.string()
},async({container_id})=>{
    return {
        content: [
          {
            type: "text",
            text: JSON.stringify(await getConatinerStatus(container_id)),
          },
        ],
      };
})

server.tool("startPauseOrKill",{
    container_id:z.string(),
    desired_state:z.string()
},async({container_id,desired_state})=>{
    return {
        content: [
          {
            type: "text",
            text: JSON.stringify(await startPauseKill(container_id,desired_state)),
          },
        ],
      };
})

async function init() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
init();
