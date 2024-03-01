const http = require("http");
const app = require("./app.js");
// const WebSocket = require("ws");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// const wss = new WebSocket.Server({ server });

server.listen(port);