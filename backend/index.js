const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const streamRouter = require("./routes/StreamRoutes");
const userRouter = require("./routes/UserRoutes");
const categoryRouter = require("./routes/CategoryRoutes");
const videoSDKRouter = require("./routes/videoSDKRoutes");
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/videosdk", videoSDKRouter);
app.use("/user", userRouter);
app.use("/stream", streamRouter);
app.use("/category", categoryRouter);

mongoose.connect(process.env.MONGODB);
mongoose.set("strictQuery", true);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
