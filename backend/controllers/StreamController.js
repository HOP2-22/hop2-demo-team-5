const Streams = require("../models/StreamModel");

exports.getStreams = async (request, response) => {
  const streams = await Streams.find();
  response.status(200).json({
    message: "success",
    data: streams,
  });
};

exports.createRoom = async (request, response) => {
  try {
    const room = await Streams.create({
      roomName: request.body.roomName,
    });
    response.status(200).json({
      message: "room created",
      data: room,
    });
  } catch (err) {
    response.status(400).json(err.message);
  }
};

exports.enterRoom = async (request, response) => {
  try {
    const roomName = request.body.roomName;
    console.log(roomName);
    const room = await Streams.find({ roomName });
    // console.log(room);
    response.status(200).json({
      message: "success",
      room,
    });
  } catch (err) {
    response.send(err.message);
  }
};
