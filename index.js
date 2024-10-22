const express = require("express");
const urlRoute = require("./routes/url");
const connectToMongoDB = require("./connect");
const app = express();
const PORT = 8000;
app.use(express.json());
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("Error in connecting MongoDB", error));

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`)); // Specifying Server port and console message
