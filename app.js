import express from "express";
const app = express();
// const socket = require("socket.io");
// const connection = required("./connection.js");
// const server = require("http").createServer(app);
// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ server: server });

// const port = process.env.PORT || 3000;

import mahjongRoutes from "./api/routes/mahjong.js";
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use("/mahjong", mahjongRoutes);

// wss.on("connection", function connection(ws) {
//   console.log("A new client Connected!");
//   ws.send("Welcome New Client!");
//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);
//     ws.send('Got your message its: ' + message);
//   });
// });

// server.listen(port);

// const server = app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// const socketIo = socket(server);

// socketIo.on("connection", (socket) => {
//   console.log("A connection has created with " + socket.id);
//   socket.on(connection.change, (changes) => {
//     socketIo.socket.emit(connection.change, changes);
//   });

//   socket.on(connection.create, (newData) => {
//     socketIo.socket.emit(connection.create, newData);
//   });
// });

export default app;
