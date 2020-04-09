let sockets = [];

const socketController = (socket, io) => {
  const broadcast = (event, data) => {
    socket.broadcast.emit(event, data);
  };
  socket.emit("initChat", { userNum: sockets.length + 1 });

  socket.on("disconnect", () => {
    const { nickname } = socket;
    for (let i = 0; i < sockets.length; i++) {
      if (socket.id === sockets[i].id) {
        sockets.splice(i, 1);
      }
    }
    console.log("disconnect User", sockets);
    broadcast("disconnected", { nickname });
  });

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, nickname });
    broadcast("newUser", { nickname, userNum: sockets.length });
    console.log("connect User", sockets);
  });

  socket.on("sendMsg", ({ message }) => {
    const { nickname } = socket;
    broadcast("newMsg", { nickname, message });
  });
};

export default socketController;
