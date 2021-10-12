import express from "express";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const server = express();

server.set("view engine", "pug");
server.set("views", process.cwd() + "/src/views");

server.use(express.urlencoded({ extended: true }));
server.use("/uploads", express.static("uploads"));
server.use("/", globalRouter);
server.use("/videos", videoRouter);
server.use("/users", userRouter);

server.listen(4000, console.log("http://localhost:4000"));
