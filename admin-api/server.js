const os = require("os");

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    console.log(req);

    return new Response(`Bunsdfhdh!`);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
