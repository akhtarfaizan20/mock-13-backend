const { UserModel } = require("../Model/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let existingUser = await UserModel.find({ email });
    if (existingUser.length) {
      console.log(existingUser);
      res.status(400).send({ msg: "User Already registered" });
      return;
    }
    bcrypt.hash(password, 5, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.status(400).send({ msg: "Something went wrong in bcrypt" });
      } else {
        const newUser = new UserModel({ email, password: hash });
        await newUser.save();
        res.send({ msg: "User is successfully registered" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Something went Wrong" });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  console.log({ email, password });
  try {
    let user = await UserModel.find({ email });
    bcrypt.compare(password, user.password, async function (err, result) {
      // result == true
      if (err) {
        console.log(err);
        res.status(400).send({ msg: "Something went wrong in bcrypt" });
      } else if (result) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token });
      } else {
        res.status(400).send({ msg: "Password didn't matched" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Something went Wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
