const userModel = require("./user.mongo");

async function getUserByEmail(email) {
  return await userModel.findOne({ email });
}

async function createUser(data) {
  const { name, email, password, isAdmin } = data;
  await userModel.create(data);
}

module.exports = {
  getUserByEmail,
  createUser,
};
