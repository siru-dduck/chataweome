import { handleNewMsg } from "./chat";
import {
  handleNewUser,
  handleDisconnected,
  handleInitChat,
} from "./notification";

// 클라이언트 소켓 선언
// getSocket 메소드를 통해 접근할것!
let socket = null;

const handleDisconnect = () => {
  console.log("서버와 연결끊김");
};

export const getSocket = () => socket;

export const initSocket = (nickname) => {
  socket = io("/");
  socket.emit("setNickname", { nickname });
  socket.on("initChat", handleInitChat);
  socket.on("newUser", handleNewUser);
  socket.on("newMsg", handleNewMsg);
  socket.on("disconnected", handleDisconnected);
  socket.on("disconnect", handleDisconnect);
};
