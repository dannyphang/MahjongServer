import { createServer } from "http";
import app from "./app.js";
// const WebSocket = require("ws");

const port = process.env.PORT || 3000;

const server = createServer(app);
console.log("server is running...");
// const wss = new WebSocket.Server({ server });

server.listen(port);
