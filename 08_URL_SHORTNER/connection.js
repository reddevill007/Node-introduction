const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { connectDB };
