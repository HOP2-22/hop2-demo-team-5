const Users = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = async (request, response) => {
  const users = await Users.find();
  response.status(200).json({
    message: "success",
    data: users,
  });
};

exports.createUser = async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(request.body.password, salt);
  try {
    const user = await Users.create({
      username: request.body.username,
      email: request.body.email,
      password: hashed,
    });
    response.status(200).json({
      message: "created successfully",
      data: user,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "30m" }
      );
      return res
        .status(200)
        .json({ email: user.email, match: match, token: token });
    } else {
      return res.status(400).json({ message: match });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
