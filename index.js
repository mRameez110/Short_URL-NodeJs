const express = require("express");
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`)); // Specifying Server port and console message