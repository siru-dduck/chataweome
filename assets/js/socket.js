// 클라이언트 소켓 선언
// getSocket 메소드를 통해 접근할것!
let socket = null;

export const getSocket = () => socket;

export const initSocket = (nickname) => {
  socket = io("/");
  socket.emit("setNickname", { nickname });
};
