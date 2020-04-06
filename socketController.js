let sockets = [];

const socketController = (socket, io) => {
  console.log(`Connect Socket : ${socket.id}`);
  const broadcast = (event, data) => {
    socket.broadcast.emit(event, data);
  };

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, nickname });
    broadcast("newUser", { nickname });
  });
};

setInterval(() => console.log(sockets), 3000);
export default socketController;
