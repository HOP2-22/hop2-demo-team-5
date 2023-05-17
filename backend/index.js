const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const streamRouter = require("./routes/StreamRoutes");
const userRouter = require("./routes/UserRoutes");
const categoryRouter = require("./routes/CategoryRoutes");
require("dotenv").config();
const wrtc = require("wrtc");
const port = process.env.PORT;
const server = http.createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const SimplePeer = require("simple-peer");

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/stream", streamRouter);
app.use("/category", categoryRouter);

mongoose.connect(process.env.MONGODB);
mongoose.set("strictQuery", true);

io.on("connection", (socket) => {
  socket.on("startStream", (data) => {
    console.log(data);
    io.to(data.id).emit("startStream", {signal: data.signalData})
  })
  socket.on("disconnent", () => {
    socket.broadcast.emit("Stream disconnected");
  })
  socket.on("recieveVideo", (data) => {
    io.emit("recieveVideo", data.signal);
  })
  socket.on("stream", (stream) => {
    io.emit("stream", stream);
  })
})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

server.listen(4000, () => {
  console.log("Socket.IO server listening on port 4000");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
