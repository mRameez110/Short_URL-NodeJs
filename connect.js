const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error in connecting MongoDB", error));
}
module.exports = connectToMongoDB;
