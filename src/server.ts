const server = Bun.serve({
  port: 8015,
  fetch(req, server) {
    if (server.upgrade(req)) return;
    return new Response("hello world — pathfinding-visualizer (bun server)");
  },
  websocket: {
    message(ws, message) {
      ws.send(`echo: ${message}`);
    },
  },
});

console.log(
  `[pathfinding-visualizer] bun server ws://localhost:${server.port}`,
);
