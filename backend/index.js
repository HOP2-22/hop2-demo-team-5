const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/UserRoutes");
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

mongoose.connect(process.env.MONGODB);
mongoose.set("strictQuery", true);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
