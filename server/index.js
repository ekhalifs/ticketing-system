require("dotenv").config();
const http = require("http");
const app = require("./app");
const { mongoose } = require("mongoose");
const server = http.createServer(app);

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connected sucessfuly");
  } catch (e) {
    console.log("Error in connecting to the database");
    throw new Error(e);
  }
}

async function startServer() {
  await mongoConnect();
  server.listen(process.env.DEV_PORT, () => {
    console.log(`App is running on port ${process.env.DEV_PORT}`);
  });
}

startServer();
