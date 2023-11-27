import figlet from "figlet";

const server = Bun.serve({
    fetch(req) {
      const body = figlet.textSync("Muhamad Taufiq Hidayat");
      return new Response(body);
    },
    port: 3000
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  