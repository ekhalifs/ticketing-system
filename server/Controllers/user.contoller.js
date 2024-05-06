const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByEmail, createUser } = require("../Model/user.model");

async function generateToken(_id) {
  const token = process.env.SECRET_KEY;
  return jwt.sign({ _id }, token, { expiresIn: "2d" });
}

async function registerUser(req, res) {
  const { name, email, password, isAdmin } = req.body;
  if (!name || !email || !password) {
    return res.status(403).json("All fields are required");
  }
  if (!validator.isEmail(email)) {
    return res.status(403).json("Enter a valid email address");
  }
  if (!validator.isStrongPassword(password)) {
  }
  const user = await getUserByEmail(email);
  if (user) {
    return res.status(403).json("user already exists");
  }

  const salt = await bcrypt.genSalt(15);
  const hashPass = await bcrypt.hash(password, salt);
  try {
    await createUser({
      name,
      email,
      password: hashPass,
      isAdmin,
    });
    res.status(201).json("user created successfuly");
  } catch (e) {
    console.log("Internal server error");
    throw new Error(e);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !email) {
    return res.status(403).json("All fields are required");
  }
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(403).json("Incorrect username or password");
  }
  const isMatchedPassword = await bcrypt.compare(password, user.password);
  if (!isMatchedPassword) {
    return res.status(403).json("Incorrect username or password");
  }
  const token = await generateToken(user._id);
  return res
    .status(200)
    .json({ _id: user._id, name: user.name, email: user.email, token });
}

module.exports = {
  registerUser,
  loginUser,
};
