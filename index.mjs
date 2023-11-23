import { createBareServer } from "@tomphttp/bare-server-node";
// const createBareServer = bareServerNode.createBareServer;
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import express from "express";
import http from "http";
import { dirname, join } from "path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";
import compression from 'compression';
import chalk from 'chalk';

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

const bare = createBareServer("/bare/");
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(compression());
app.use(express.static(__dirname + "/static/"));
app.use("/uv/", express.static(uvPath));
app.use("/dynamic/", express.static(__dirname + "/dynamic/"));

app.use((req, res) => {
  res.status(404);
  res.send(
    "<style>*{background:black;color:white;font-size:36px}</style>404<br /><br /><br />yikes"
  );
});

const server = http.createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  const address = server.address();
  console.log(chalk.green("ABYSS: Abyss Web started."));
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
