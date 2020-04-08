import express from "express";
import socketIo from "socket.io";
import dotenv from "dotenv";
import logger from "morgan";
import helmet from "helmet";
import socketController from "./socketController";

dotenv.config();
const app = express();

app.set("view engine", "pug");

app.use(helmet());
app.use(logger("dev"));
app.use("/static", express.static("static"));

app.get("/", (_, res) => {
  res.render("home");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`✅ server listen http://localhost:${process.env.PORT}`);
});

const io = socketIo.listen(server);

io.on("connection", (socket) => {
  socketController(socket, io);
});
