const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StreamSchema = new Schema({
  username: { type: String },
});

const Streams = mongoose.model("streams", StreamSchema);

module.exports = Streams;
