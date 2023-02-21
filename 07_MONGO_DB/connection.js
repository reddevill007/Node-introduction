// Connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mong Error", err));
}

module.exports = { connectMongoDb };
