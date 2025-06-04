// server.mjs
import { createServer } from "node:http";

const somma = (a, b) => a + b;

const server = createServer((req, res) => {
  const result = somma(5, 6);
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`La somma di 5 e 6 è: ${result}`);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
