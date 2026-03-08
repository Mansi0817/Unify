const socketIO = require("socket.io");

function setupSocket(server) {

  const io = socketIO(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket) => {

    console.log("User connected");

    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", message);
    });

  });

}

module.exports = setupSocket;