const express = require("express");
const {
  getToken,
  createMeeting,
  validateMeeting,
} = require("../controllers/videoSDK");

const videoSDKRouter = express.Router();

videoSDKRouter
  .get("/get-token", getToken)
  .post("/create-meeting", createMeeting)
  .get("/validate-meeting/:meetingId", validateMeeting);

module.exports = videoSDKRouter;
