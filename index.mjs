import { createBareServer } from "@tomphttp/bare-server-node";
// const createBareServer = bareServerNode.createBareServer;
import express from "express";
import http from "http";
import { dirname, join } from "path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";
import compression from 'compression';
import chalk from 'chalk';
import 'dotenv/config'


let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

const bare = createBareServer("/bare/");
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(compression());
app.use(express.static(__dirname + "/static/"));
app.use("/class/", express.static(__dirname + "/services/uv/"));
app.use("/work/", express.static(__dirname + "/services/dynamic/"));

app.use((req, res) => {
  res.status(404);
  res.send(
    `<style>body{font-family:Roboto,sans-serif;background-color:#111;text-align:center;padding:50px;}.container{background-color:#111;border-radius:5px;box-shadow:0px 0px 10px rgba(0,0,0,0.1);padding:20px;}h1{font-size:48px;color:#fff;margin-bottom:20px;}p{font-size:18px;color:#fff;}a{text-decoration:none;color:lightgreen;}a:hover{text-decoration:underline;}</style><div class="container"><h1>404 :(</h1><p>The page you are looking for might have been removed or does not exist. If you opened Abyss inside of Abyss, this page will also show up.</p><p>Open a new tab to continue.</a></p></div>`
  );
});

const server = http.createServer();

server.on('error', (err) => {
  console.error(`ERROR: ${err}`);
});

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
